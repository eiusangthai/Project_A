import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import superAdminMiddleware from "../middleware/superAdminMiddleware.js";
import bcrypt from "bcrypt";

const router = express.Router();
const SALT_ROUNDS = 10;

router.get("/", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.post("/", [authMiddleware, superAdminMiddleware], async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
    }

    const [existing] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, phone, password, role) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone || null, hashedPassword, role]
    );

    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error while creating user");
  }
});

router.put("/:id", [authMiddleware, superAdminMiddleware], async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, role, password } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
    }

    let queryParams = [name, email, phone || null, role];
    let queryString =
      "UPDATE users SET name = ?, email = ?, phone = ?, role = ?";

    if (password && password.length > 0) {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(password, salt);
      queryString += ", password = ?";
      queryParams.push(hashedPassword);
    }

    queryString += " WHERE id = ?";
    queryParams.push(id);

    await pool.query(queryString, queryParams);

    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete(
  "/:id",
  [authMiddleware, superAdminMiddleware],
  async (req, res) => {
    try {
      const userId = req.params.id;
      await pool.query("DELETE FROM users WHERE id = ?", [userId]);
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

export default router;

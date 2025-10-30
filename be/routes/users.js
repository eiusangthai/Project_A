// File: be/routes/users.js
import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// @route   GET /api/users
// @desc    Lấy tất cả người dùng (CHỈ ADMIN)
// @access  Private (Admin)
router.get("/", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).send("Lỗi Server");
  }
});

// @route   DELETE /api/users/:id
// @desc    Xóa một người dùng (CHỈ ADMIN)
// @access  Private (Admin)
router.delete("/:id", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const userId = req.params.id;
    await pool.query("DELETE FROM users WHERE id = ?", [userId]);
    res.json({ message: "Người dùng đã được xóa" });
  } catch (err) {
    res.status(500).send("Lỗi Server");
  }
});

export default router;

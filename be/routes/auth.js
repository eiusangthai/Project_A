import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Đăng ký
router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
        }

        // kiểm tra email đã tồn tại chưa
        const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "Email đã được sử dụng" });
        }

        // thêm user mới
        await pool.query(
            "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
            [name, email, phone || null, password]
        );

        res.status(200).json({ message: "Đăng ký thành công!" });
    } catch (err) {
        console.error("Lỗi MySQL:", err);
        res.status(500).json({ message: "Đăng ký thất bại" });
    }
});

// Đăng nhập
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Thiếu email hoặc mật khẩu" });
        }

        const [rows] = await pool.query(
            "SELECT id, name, email, phone FROM users WHERE email = ? AND password = ?",
            [email, password]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: "Sai email hoặc mật khẩu" });
        }

        // ở đây có thể generate JWT, tạm thời trả về user
        res.status(200).json({ message: "Đăng nhập thành công!", user: rows[0] });
    } catch (err) {
        console.error("Lỗi MySQL:", err);
        res.status(500).json({ message: "Đăng nhập thất bại" });
    }
});

export default router;

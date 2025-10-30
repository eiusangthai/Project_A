import { pool } from "../db.js";

const adminMiddleware = async (req, res, next) => {
  try {
    const userId = req.userId;

    const [rows] = await pool.query("SELECT role FROM users WHERE id = ?", [
      userId,
    ]);

    if (rows.length === 0 || rows[0].role !== "admin") {
      return res
        .status(403)
        .json({ message: "Không có quyền truy cập. Yêu cầu quyền Admin." });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: "Lỗi Server khi kiểm tra quyền Admin" });
  }
};

export default adminMiddleware;

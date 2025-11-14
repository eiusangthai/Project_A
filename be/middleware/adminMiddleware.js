import { pool } from "../db.js";

const adminMiddleware = async (req, res, next) => {
  try {
    const userId = req.userId;
    const [rows] = await pool.query("SELECT role FROM users WHERE id = ?", [
      userId,
    ]);

    const userRole = rows[0]?.role;
    if (userRole === "admin" || userRole === "superadmin") {
      next();
    } else {
      return res.status(403).json({ message: "Không có quyền Admin." });
    }
  } catch (err) {
    res.status(500).json({ message: "Lỗi Server khi kiểm tra quyền Admin" });
  }
};

export default adminMiddleware;

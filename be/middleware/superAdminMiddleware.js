import { pool } from "../db.js";

const superAdminMiddleware = async (req, res, next) => {
  try {
    const userId = req.userId;
    const [rows] = await pool.query("SELECT role FROM users WHERE id = ?", [
      userId,
    ]);

    if (rows.length === 0 || rows[0].role !== "superadmin") {
      return res.status(403).json({ message: "Yêu cầu quyền Super Admin." });
    }

    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi Server khi kiểm tra quyền Super Admin" });
  }
};

export default superAdminMiddleware;

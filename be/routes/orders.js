import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import superAdminMiddleware from "../middleware/superAdminMiddleware.js";

const router = express.Router();

// GET /api/orders (SỬA LẠI QUERY)
router.get("/", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const [orders] = await pool.query(
      `SELECT o.*, u.name as user_name, u.email as user_email 
       FROM orders o
       LEFT JOIN users u ON o.user_id = u.id
       ORDER BY o.created_at DESC`
    );
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Lỗi Server");
  }
});

// GET /api/orders/:id/items (Giữ nguyên)
router.get(
  "/:id/items",
  [authMiddleware, adminMiddleware],
  async (req, res) => {
    try {
      const { id } = req.params;
      const [items] = await pool.query(
        "SELECT * FROM order_items WHERE order_id = ?",
        [id]
      );
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Lỗi Server");
    }
  }
);

// PUT /api/orders/:id (Giữ nguyên)
router.put("/:id", [authMiddleware, superAdminMiddleware], async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Thiếu trạng thái (status)" });
    }

    await pool.query("UPDATE orders SET status = ? WHERE id = ?", [status, id]);

    const [rows] = await pool.query(
      `SELECT o.*, u.name as user_name, u.email as user_email 
       FROM orders o
       LEFT JOIN users u ON o.user_id = u.id
       WHERE o.id = ?`,
      [id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Lỗi Server");
  }
});

// DELETE /api/orders/:id (Giữ nguyên)
router.delete(
  "/:id",
  [authMiddleware, superAdminMiddleware],
  async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query("DELETE FROM order_items WHERE order_id = ?", [id]);
      await pool.query("DELETE FROM orders WHERE id = ?", [id]);

      res.json({ message: "Đơn hàng đã được xóa vĩnh viễn" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Lỗi Server");
    }
  }
);

export default router;

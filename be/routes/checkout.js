import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/checkout
// @desc    User đặt hàng (gửi giỏ hàng)
// @access  Private (Chỉ user đã đăng nhập)
router.post("/", authMiddleware, async (req, res) => {
  const { shippingAddress, shippingPhone, cartItems } = req.body;
  const userId = req.userId;

  if (
    !shippingAddress ||
    !shippingPhone ||
    !cartItems ||
    cartItems.length === 0
  ) {
    return res.status(400).json({ message: "Thiếu thông tin đặt hàng" });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const total_price = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, shipping_address, shipping_phone, total_price, status) VALUES (?, ?, ?, ?, ?)",
      [userId, shippingAddress, shippingPhone, total_price, "processing"]
    );

    const orderId = orderResult.insertId;

    const orderItemsData = cartItems.map((item) => [
      orderId,
      item.id,
      item.name,
      item.quantity,
      item.price,
    ]);

    await connection.query(
      "INSERT INTO order_items (order_id, product_id, product_name, quantity, price_at_purchase) VALUES ?",
      [orderItemsData]
    );

    await connection.commit();
    res.status(201).json({ message: "Đặt hàng thành công!", orderId: orderId });
  } catch (err) {
    await connection.rollback();
    console.error(err.message);
    res.status(500).send("Lỗi Server khi xử lý đơn hàng");
  } finally {
    connection.release();
  }
});

export default router;

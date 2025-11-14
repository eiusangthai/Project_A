import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ShoppingCart as CartIcon, Frown, Truck } from "lucide-react";
import "./style.css";
import { useCart } from "../../../context/CartContext";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../utils/api.js";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!user) {
      alert("Vui lòng đăng nhập để tiếp tục thanh toán.");
      navigate("/login");
      return;
    }

    if (!shippingAddress || !shippingPhone) {
      setError("Vui lòng nhập đầy đủ địa chỉ và số điện thoại.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/checkout", {
        shippingAddress,
        shippingPhone,
        cartItems,
      });

      setSuccess("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");
      clearCart();
      setShippingAddress("");
      setShippingPhone("");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Đặt hàng thất bại, vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cart-title"
      >
        <CartIcon size={24} style={{ marginRight: "10px" }} />
        Giỏ Hàng
      </motion.h1>

      <div className="cart-content">
        <motion.div
          className="cart-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <motion.div
                  key={item.variantKey}
                  layout
                  exit={{ opacity: 0, x: 100 }}
                  className="cart-item"
                >
                  <div className="item-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-img"
                    />
                    <div className="item-details">
                      <h2>{item.name}</h2>
                      {item.color && item.size && (
                        <p className="text-muted small mb-1">
                          Màu: <strong>{item.color}</strong> | Size:{" "}
                          <strong>{item.size}</strong>
                        </p>
                      )}
                      <p>{item.price.toLocaleString("vi-VN")}₫</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.variantKey, -1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantKey, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-actions">
                    <span className="item-total">
                      {(item.price * item.quantity).toLocaleString("vi-VN")}₫
                    </span>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(item.variantKey)}
                    >
                      <Trash2 size={20} />
                      <span>Xóa</span>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="empty-cart"
              >
                <Frown size={24} style={{ marginBottom: "10px" }} />
                {success ? success : "Giỏ hàng trống"}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="cart-summary"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>Tóm tắt đơn hàng</h3>
          <div className="summary-line">
            <span>Tạm tính</span>
            <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
          </div>
          <div className="summary-line">
            <span>Phí giao hàng</span>
            <span>
              Miễn phí <Truck size={16} style={{ marginLeft: "5px" }} />
            </span>
          </div>
          <div className="summary-total">
            <span>Tổng cộng</span>
            <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
          </div>

          <hr style={{ margin: "20px 0" }} />

          {cartItems.length > 0 ? (
            <form onSubmit={handleCheckout} className="checkout-form">
              <h4 style={{ marginBottom: "15px" }}>Thông tin giao hàng</h4>

              {error && <div className="cart-error-message">{error}</div>}
              {success && <div className="cart-success-message">{success}</div>}

              <div className="form-group">
                <label htmlFor="shippingAddress">Địa chỉ nhận hàng (*)</label>
                <input
                  type="text"
                  id="shippingAddress"
                  className="form-control"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Nhập địa chỉ của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="shippingPhone">Số điện thoại (*)</label>
                <input
                  type="text"
                  id="shippingPhone"
                  className="form-control"
                  value={shippingPhone}
                  onChange={(e) => setShippingPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <button
                type="submit"
                disabled={loading || cartItems.length === 0}
                className="checkout-btn"
              >
                {loading ? "Đang xử lý..." : "Đặt Hàng (Checkout)"}
              </button>
            </form>
          ) : (
            <p style={{ textAlign: "center", color: "#6c757d" }}>
              {success
                ? "Cảm ơn bạn đã mua hàng!"
                : "Vui lòng thêm sản phẩm để thanh toán."}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ShoppingCart);

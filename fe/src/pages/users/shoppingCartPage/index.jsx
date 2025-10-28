import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  X,
  ShoppingCart as CartIcon,
  Frown,
  Truck,
} from "lucide-react";
import { useCart } from "../../../context/CartContext";

import "./style.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [confirmingItemId, setConfirmingItemId] = useState(null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveOne = (id) => {
    updateQuantity(id, -1);
    setConfirmingItemId(null);
  };

  const handleRemoveAll = (id) => {
    removeFromCart(id);
    setConfirmingItemId(null);
  };

  const cancelRemove = () => {
    setConfirmingItemId(null);
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
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
                  className="cart-item"
                >
                  <div className="item-info">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="item-img"
                    />
                    <div className="item-details">
                      <h2>{item.name}</h2>
                      <p>{item.price.toLocaleString("vi-VN")}₫</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
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
                      onClick={() => setConfirmingItemId(item.id)}
                    >
                      <Trash2 size={20} />
                      <span>Xóa</span>
                    </button>

                    <AnimatePresence>
                      {confirmingItemId === item.id && (
                        <motion.div
                          className="confirmation-popover"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p>Xác nhận xóa?</p>
                          <div className="confirmation-buttons">
                            <div className="confirmation-actions">
                              {item.quantity > 1 && (
                                <button
                                  onClick={() => handleRemoveOne(item.id)}
                                  className="btn-danger-outline"
                                >
                                  Xóa 1
                                </button>
                              )}
                              <button
                                onClick={() => handleRemoveAll(item.id)}
                                className="btn-danger"
                              >
                                Xóa hết ({item.quantity})
                              </button>
                            </div>
                            <button
                              onClick={cancelRemove}
                              className="cancel-btn"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="empty-cart"
              >
                <Frown size={24} />
                Giỏ hàng trống
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="cart-summary"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
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
          <button disabled={cartItems.length === 0} className="checkout-btn">
            Mua hàng
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ShoppingCart);

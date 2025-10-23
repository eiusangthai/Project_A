import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";
import "./style.css";

const allProducts = [
  {
    id: 1,
    name: "Vợt Yonex Astrox 99",
    price: 2500000,
    image: "/newProduct/99pro.jpg",
  },
  {
    id: 2,
    name: "Giày Yonex 65Z3",
    price: 1800000,
    image: "/newProduct/65z3.jpg",
  },
  {
    id: 3,
    name: "Áo cầu lông Lining",
    price: 350000,
    image: "/newProduct/lining.jpg",
  },
  {
    id: 4,
    name: "Váy cầu lông nữ",
    price: 420000,
    image: "/newProduct/skirtTaro.jpg",
  },
  {
    id: 5,
    name: "Quần cầu lông Yonex",
    price: 320000,
    image: "/newProduct/shortYonex.jpg",
  },
  {
    id: 6,
    name: "Túi vợt Yonex 9 ngăn",
    price: 1500000,
    image: "/newProduct/bagYonex.jpg",
  },
  {
    id: 7,
    name: "Balo cầu lông Adidas",
    price: 890000,
    image: "/newProduct/bagAddidas.jpg",
  },
  {
    id: 8,
    name: "Phụ kiện quấn cán",
    price: 50000,
    image: "/newProduct/items.jpg",
  },
  {
    id: 9,
    name: "Vợt Pickleball Taro",
    price: 2200000,
    image: "/newProduct/racketPickleball.jpg",
  },
  {
    id: 10,
    name: "Vợt Tennis Wilson Pro Staff",
    price: 4500000,
    image: "/newProduct/racketTennis.jpg",
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { ...allProducts[0], quantity: 1 },
    { ...allProducts[1], quantity: 2 },
    { ...allProducts[4], quantity: 1 },
  ]);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cart-title"
      >
        🛒 Giỏ Hàng
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
                      <p>{item.price.toLocaleString("vi-VN")}₫</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
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
                      onClick={() => handleRemove(item.id)}
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
                Giỏ hàng trống 😢
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
            <span>Miễn phí 🚚</span>
          </div>
          <div className="summary-total">
            <span>Tổng cộng</span>
            <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
          </div>
          <button disabled={!cartItems.length} className="checkout-btn">
            Mua hàng
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ShoppingCart);

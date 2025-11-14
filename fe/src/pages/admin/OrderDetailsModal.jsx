import { useState, useEffect, memo } from "react";
import api from "../../utils/api.js";

const OrderDetailsModal = ({ isOpen, onClose, orderId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && orderId) {
      const fetchItems = async () => {
        setLoading(true);
        try {
          const res = await api.get(`/orders/${orderId}/items`);
          setItems(res.data);
        } catch (err) {
          console.error("Lỗi lấy chi tiết đơn hàng:", err);
        }
        setLoading(false);
      };
      fetchItems();
    }
  }, [isOpen, orderId]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>Chi tiết Đơn hàng #{orderId}</h3>

        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá (tại lúc mua)</th>
                <th>Tổng phụ</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price_at_purchase.toLocaleString("vi-VN")}₫</td>
                  <td>
                    {(item.price_at_purchase * item.quantity).toLocaleString(
                      "vi-VN"
                    )}
                    ₫
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default memo(OrderDetailsModal);

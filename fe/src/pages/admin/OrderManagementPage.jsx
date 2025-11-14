import { useState, useEffect, memo } from "react";
import api from "../../utils/api.js";
import OrderDetailsModal from "./OrderDetailsModal.jsx";
import { useAuth } from "../../context/AuthContext";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const isSuperAdmin = user && user.role === "superadmin";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [editingOrderId, setEditingOrderId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      // === SỬA Ở ĐÂY: Thêm headers để chống cache ===
      const response = await api.get("/orders", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      // ==========================================

      setOrders(response.data);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách đơn hàng:", err);
    }
    setLoading(false);
  };

  const handleViewDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
  };

  const handleDelete = async (orderId) => {
    if (window.confirm("Bạn có chắc muốn XÓA VĨNH VIỄN đơn hàng này?")) {
      try {
        await api.delete(`/orders/${orderId}`);
        setOrders(orders.filter((order) => order.id !== orderId));
      } catch (err) {
        alert("Xóa thất bại!");
      }
    }
  };

  const handleEditStatus = (order) => {
    setEditingOrderId(order.id);
    setNewStatus(order.status);
  };

  const handleCancelEdit = () => {
    setEditingOrderId(null);
    setNewStatus("");
  };

  const handleSaveStatus = async (orderId) => {
    try {
      const res = await api.put(`/orders/${orderId}`, { status: newStatus });
      setOrders(orders.map((o) => (o.id === orderId ? res.data : o)));
      setEditingOrderId(null);
    } catch (err) {
      alert("Cập nhật trạng thái thất bại!");
    }
  };

  if (loading) return <p>Đang tải danh sách đơn hàng...</p>;

  return (
    <div>
      <h2>Quản lý Đơn hàng</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID Đơn hàng</th>
            <th>Người đặt</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Ngày đặt</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>
                {order.user_name} ({order.user_email || "N/A"})
              </td>
              <td>{order.total_price.toLocaleString("vi-VN")}₫</td>

              <td>
                {isSuperAdmin && editingOrderId === order.id ? (
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    style={{ padding: "4px" }}
                  >
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                ) : (
                  order.status
                )}
              </td>

              <td>{new Date(order.created_at).toLocaleDateString("vi-VI")}</td>

              <td>
                <button
                  className="btn-view"
                  onClick={() => handleViewDetails(order.id)}
                >
                  Xem
                </button>

                {isSuperAdmin && (
                  <>
                    {editingOrderId === order.id ? (
                      <button
                        className="btn-save"
                        onClick={() => handleSaveStatus(order.id)}
                      >
                        Lưu
                      </button>
                    ) : (
                      <button
                        className="btn-edit"
                        onClick={() => handleEditStatus(order)}
                      >
                        Sửa
                      </button>
                    )}

                    {editingOrderId === order.id ? (
                      <button className="btn-cancel" onClick={handleCancelEdit}>
                        Hủy
                      </button>
                    ) : (
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(order.id)}
                      >
                        Xóa
                      </button>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderId={selectedOrderId}
      />
    </div>
  );
};

export default memo(OrderManagementPage);

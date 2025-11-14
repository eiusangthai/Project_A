import { useState, useEffect } from "react";
import api from "../../utils/api.js";
import UserFormModal from "./UserFormModal.jsx";
import { useAuth } from "../../context/AuthContext";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: loggedInUser } = useAuth();
  const isSuperAdmin = loggedInUser && loggedInUser.role === "superadmin";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách user:", err);
    }
    setLoading(false);
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
      try {
        await api.delete(`/users/${userId}`);
        setUsers(users.filter((user) => user.id !== userId));
      } catch (err) {
        alert("Xóa thất bại!");
      }
    }
  };

  // Mở modal ở chế độ "Thêm mới"
  const handleOpenCreateModal = () => {
    setCurrentUser(null);
    setIsModalOpen(true);
  };

  // Mở modal ở chế độ "Sửa"
  const handleOpenEditModal = (userToEdit) => {
    setCurrentUser(userToEdit);
    setIsModalOpen(true);
  };

  // Hàm được gọi khi Form (trong Modal) lưu thành công
  const handleSaveUser = (savedUser) => {
    if (currentUser === null) {
      // Thêm mới
      setUsers([...users, savedUser]);
    } else {
      // Sửa
      setUsers(users.map((u) => (u.id === savedUser.id ? savedUser : u)));
    }
    setCurrentUser(null);
  };

  if (loading) return <p>Đang tải danh sách...</p>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Quản lý Người dùng</h2>
        {isSuperAdmin && (
          <div className="admin-header-actions">
            <button className="btn-primary" onClick={handleOpenCreateModal}>
              + Thêm User
            </button>
          </div>
        )}
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vai trò</th>
            {isSuperAdmin && <th>Hành động</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* Luôn ở chế độ XEM */}
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone || "N/A"}</td>
              <td>{user.role}</td>

              {isSuperAdmin && (
                <td>
                  <button
                    onClick={() => handleOpenEditModal(user)}
                    className="btn-edit"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn-delete"
                  >
                    Xóa
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={currentUser}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default UserManagementPage;

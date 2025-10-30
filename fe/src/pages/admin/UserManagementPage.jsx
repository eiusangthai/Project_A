import { useState, useEffect } from "react";
import api from "../../utils/api.js";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Lỗi khi lấy danh sách user:", err);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

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

  if (loading) return <p>Đang tải danh sách...</p>;

  return (
    <div>
      <h2>Quản lý Người dùng</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn-delete"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPage;

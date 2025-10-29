import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";
import "./auth.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await api.get("/auth/me");
        setUser(response.data);
      } catch (err) {
        console.error("Lỗi lấy thông tin user:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage"));
    setUser(null);
    navigate("/login");
  };

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Đang tải thông tin người dùng...
      </p>
    );

  if (!user) return null;

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Xin chào, {user.name || user.username} 👋</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {user.phone || "Chưa cập nhật"}
        </p>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
};

export default ProfilePage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";
import "./auth.css";
import { useAuth } from "../../../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await api.put("/auth/me", formData);
      updateUser(response.data);
      setSuccess("Cập nhật thông tin thành công!");
      setIsEditing(false);
    } catch (err) {
      console.error("Lỗi cập nhật:", err);
      setError(err?.response?.data?.message || "Cập nhật thất bại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError(null);
    setSuccess(null);
    setFormData({
      name: user.name || "",
      phone: user.phone || "",
      address: user.address || "",
    });
  };

  if (!user) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Đang tải thông tin người dùng...
      </p>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card profile-card">
        <h2>Hồ sơ cá nhân</h2>

        {error && <p className="auth-error-message">{error}</p>}
        {success && <p className="auth-success-message">{success}</p>}

        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <label htmlFor="name">Họ và Tên (*)</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="address">Địa chỉ</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Ví dụ: 123 Nguyễn Văn Cừ, P.1, Q.5, TP.HCM"
            />

            <div className="profile-actions">
              <button
                type="button"
                onClick={handleCancel}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Hủy
              </button>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-view">
            <p>
              <strong>Họ tên:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {user.phone || "Chưa cập nhật"}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {user.address || "Chưa cập nhật"}
            </p>

            <div className="profile-actions">
              <button onClick={() => setIsEditing(true)}>
                Chỉnh sửa thông tin
              </button>
              <button onClick={handleLogout} className="btn-secondary">
                Đăng xuất
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

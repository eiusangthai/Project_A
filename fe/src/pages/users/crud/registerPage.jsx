import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../utils/api";
import "../crud/auth.css";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { name, email, phone, password, password2 } = form;

    if (password !== password2) {
      setError("Mật khẩu không khớp");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/register", { name, email, phone, password });
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>ĐĂNG KÝ</h2>
        <p>
          Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nhập tên của bạn (*)"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Nhập email của bạn (*)"
            required
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mật khẩu"
            required
          />
          <input
            name="password2"
            type="password"
            value={form.password2}
            onChange={handleChange}
            placeholder="Nhập lại mật khẩu"
            required
          />

          {error && <p className="auth-error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Đang xử lý..." : "ĐĂNG KÝ"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

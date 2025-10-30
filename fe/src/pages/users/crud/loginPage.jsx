import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../utils/api";
import "../crud/auth.css";
import { useAuth } from "../../../context/AuthContext";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });
      const { token, user } = res.data;

      login(user, token);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>ĐĂNG NHẬP</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mật khẩu"
            required
          />
          {error && <p className="auth-error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Đang xử lý..." : "ĐĂNG NHẬP"}
          </button>
        </form>
        <p>
          Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

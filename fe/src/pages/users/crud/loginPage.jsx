import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../utils/api";
import "../crud/auth.css";

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await api.post("/auth/login", {
                email: form.email,
                password: form.password,
            });
            const { token, user } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("currentUser", JSON.stringify(user));

            // Báo cho Header cập nhật
            window.dispatchEvent(new Event("storage"));

            navigate("/"); // redirect về home
        } catch (err) {
            console.error(err);
            alert(err?.response?.data?.message || "Đăng nhập thất bại");
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

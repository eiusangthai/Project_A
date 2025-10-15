import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // trạng thái loading

    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser);
                setUser(parsedUser);
            } catch (err) {
                console.error("Lỗi parse user:", err);
                localStorage.removeItem("currentUser");
                navigate("/login");
            }
        } else {
            // nếu chưa đăng nhập
            navigate("/login");
        }
        setLoading(false);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        window.dispatchEvent(new Event("storage")); // báo cho Header cập nhật
        setUser(null);
        alert("Đã đăng xuất!");
        navigate("/login");
    };

    if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Đang tải thông tin người dùng...</p>;
    if (!user) return null; // nếu không có user thì không render

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Xin chào, {user.name || user.username} 👋</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Số điện thoại:</strong> {user.phone || "Chưa cập nhật"}</p>
                <button onClick={handleLogout}>Đăng xuất</button>
            </div>
        </div>
    );
};

export default ProfilePage;

import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

import "./style.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (!savedUser) {
      navigate(`/${ROUTERS.USER.LOGIN}`);
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.role !== "admin") {
        navigate(`/${ROUTERS.USER.HOME}`);
        return;
      }
      setUser(parsedUser);
    } catch (e) {
      localStorage.clear();
      navigate(`/${ROUTERS.USER.LOGIN}`);
    }
    setLoading(false);
  }, [navigate]);

  if (loading) return <p>Đang kiểm tra quyền truy cập...</p>;
  if (!user) return null;

  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li>
            <Link to={`/${ROUTERS.ADMIN.DASHBOARD}`}>Tổng quan</Link>
          </li>
          <li>
            <Link to={`/${ROUTERS.ADMIN.USER_MANAGEMENT}`}>Quản lý Users</Link>
          </li>
          <li>
            <Link to={`/${ROUTERS.ADMIN.PRODUCT_MANAGEMENT}`}>
              Quản lý Products
            </Link>
          </li>
          <li>
            <Link to={`/${ROUTERS.USER.HOME}`}>Về trang Shop</Link>
          </li>
        </ul>
      </nav>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

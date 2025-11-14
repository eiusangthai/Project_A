import { useEffect, useState } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import { useAuth } from "../../../context/AuthContext";
import "./style.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      navigate(`/${ROUTERS.USER.LOGIN}`);
      return;
    }

    if (user.role !== "admin" && user.role !== "superadmin") {
      alert("Bạn không có quyền truy cập vào trang này.");
      navigate(`/${ROUTERS.USER.HOME}`);
      return;
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Đang kiểm tra quyền truy cập...
      </p>
    );
  }
  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li>
            <NavLink to={`/${ROUTERS.ADMIN.USER_MANAGEMENT}`}>
              Quản lý Users
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${ROUTERS.ADMIN.PRODUCT_MANAGEMENT}`}>
              Quản lý Products
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${ROUTERS.ADMIN.ORDER_MANAGEMENT}`}>
              Quản lý Đơn hàng
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${ROUTERS.USER.HOME}`}>Về trang Shop</NavLink>
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

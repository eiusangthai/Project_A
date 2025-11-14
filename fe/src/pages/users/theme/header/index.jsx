import { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../../../utils/api";
import { ROUTERS } from "../../../../utils/router";
import { useAuth } from "../../../../context/AuthContext";
import { useCart } from "../../../../context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await api.get("/menu");
        setMenuData(res.data);
      } catch (err) {
        console.error("Lỗi tải menu:", err);
      }
    };
    fetchMenu();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate(`/${ROUTERS.USER.LOGIN}`);
  };

  return (
    <header className="header">
      <div className="top-row">
        <ul className="social-links desktop-only">
          {["facebook", "twitter", "youtube", "pinterest"].map((icon, i) => (
            <li key={i}>
              <a href="#" onClick={closeMenu}>
                <i className={`fab fa-${icon}`}></i>
              </a>
            </li>
          ))}
        </ul>

        <div className="logo">
          <Link to={`/${ROUTERS.USER.HOME}`} onClick={closeMenu}>
            <img src="/logo.png" alt="Company Logo" />
          </Link>
        </div>

        <ul className="auth-links desktop-only">
          {!user ? (
            <>
              <li>
                <Link to={`/${ROUTERS.USER.LOGIN}`} onClick={closeMenu}>
                  <i className="fa fa-user"></i> Login
                </Link>
              </li>
              <li>
                <Link to={`/${ROUTERS.USER.SHOPPINGCART}`} onClick={closeMenu}>
                  <i className="fa fa-shopping-cart"></i>
                  {cartCount > 0 && (
                    <span
                      className="position-absolute translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${ROUTERS.USER.REGISTER}`}
                  className="highlight"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* === SỬA LỖI Ở ĐÂY === */}
              {/* Thêm check 'superadmin' */}
              {(user.role === "admin" || user.role === "superadmin") && (
                <li>
                  <Link
                    to={`/${ROUTERS.ADMIN.DASHBOARD}`}
                    className="highlight-admin"
                  >
                    <i className="fa fa-cog"></i> Admin
                  </Link>
                </li>
              )}
              {/* ===================== */}

              <li>
                <Link to={`/${ROUTERS.USER.PROFILEUSER}`} onClick={closeMenu}>
                  <i className="fa fa-user"></i> Xin chào,{" "}
                  {user.name || user.username}
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to={`/${ROUTERS.USER.SHOPPINGCART}`}>
                  <i className="fa fa-shopping-cart"></i>
                  {cartCount > 0 && (
                    <span
                      className="position-absolute translate-middle badge rounded-pill bg-danger"
                      style={{
                        fontSize: "0.7rem",
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link className="highlight" onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i> Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
        <div className="collapse navbar-collapse">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to={`/${ROUTERS.USER.HOME}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/${ROUTERS.USER.PROFILE}`} onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="dropdown">
              <div className="product-menu-toggle">
                <Link to={`/${ROUTERS.USER.PRODUCTS}`} onClick={closeMenu}>
                  Products
                </Link>
                <span
                  className="dropdown-arrow"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  ▾
                </span>
              </div>

              <ul className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                {menuData.map((category) => (
                  <li key={category.id}>
                    <Link to={category.path} onClick={closeMenu}>
                      {category.name}
                    </Link>
                    {category.subcategories?.length > 0 && (
                      <ul className="submenu">
                        {category.subcategories.map((sub) => (
                          <li key={sub.id}>
                            <Link to={sub.path} onClick={closeMenu}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to={`/${ROUTERS.USER.NEWS}`} onClick={closeMenu}>
                News
              </Link>
            </li>
            <li className="dropdown">
              <span>Instructions ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to={`/${ROUTERS.USER.PAYMENT}`} onClick={closeMenu}>
                    Payment instructions
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/${ROUTERS.USER.CONTACT}`} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex pe-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default memo(Header);

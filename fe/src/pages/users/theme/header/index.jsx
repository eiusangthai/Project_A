import { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { productMenuData } from "../../../../data/menuData.jsx";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [user, setUser] = useState(null); // <-- Vấn đề nằm ở đây
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  // 🔹 Sửa: useEffect này sẽ xử lý CẢ GIỎ HÀNG VÀ USER
  useEffect(() => {
    // 1. Hàm con để tải giỏ hàng
    const loadCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const total = savedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };

    // 2. Hàm con để kiểm tra trạng thái đăng nhập
    const checkUserStatus = () => {
      const savedUser = localStorage.getItem("currentUser");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    };

    // 3. Tạo một hàm xử lý chung
    const handleStorageChange = () => {
      loadCart();
      checkUserStatus();
    };

    // 4. Chạy cả hai hàm khi component tải lần đầu
    handleStorageChange();

    // 5. Lắng nghe SỰ KIỆN "storage" (do Login/Logout/Cart gửi)
    window.addEventListener("storage", handleStorageChange);

    // 6. Dọn dẹp
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Chỉ chạy một lần khi component mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage")); // Báo cho chính nó và các tab khác cập nhật
    // setUser(null); // Không cần dòng này nữa vì event "storage" sẽ tự làm
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

        {/* Phần này bây giờ sẽ hoạt động chính xác */}
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

      {/* Navbar */}
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
              <span onClick={() => setProductsOpen(!productsOpen)}>
                Products ▾
              </span>
              <ul className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                {productMenuData.map((category) => (
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

          {/* Search */}
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

        {/* Hamburger */}
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

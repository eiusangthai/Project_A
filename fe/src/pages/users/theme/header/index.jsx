import { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { productMenuData } from "../../../../data/menuData.jsx";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    const loadUser = () => {
      const savedUser = localStorage.getItem("currentUser");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    loadUser(); // chạy khi Header mount

    // Lắng nghe sự kiện storage để update UI
    const handleStorageChange = () => loadUser();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage")); // báo cho Header cập nhật
    setUser(null);
    navigate(`/${ROUTERS.USER.LOGIN}`);
  };

  return (
    <header className="header">
      {/* 🔹 Top row */}
      <div className="top-row">
        <ul className="social-links desktop-only">
          {[
            { icon: "facebook", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "youtube", link: "#" },
            { icon: "pinterest", link: "#" },
          ].map((item, i) => (
            <li key={i}>
              <a href={item.link} onClick={closeMenu}>
                <i className={`fab fa-${item.icon}`}></i>
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
                <Link to={`/${ROUTERS.USER.SHOPPINGCART}`} onClick={closeMenu}>
                  <i className="fa fa-shopping-cart"></i>
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

      {/* 🔹 Navbar */}
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
                    {/* Danh mục cha */}
                    <Link to={category.path} onClick={closeMenu}>
                      {category.name}
                    </Link>

                    {/* Kiểm tra và tạo danh mục con */}
                    {category.subcategories &&
                      category.subcategories.length > 0 && (
                        <ul className="submenu">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory.id}>
                              <Link to={subcategory.path} onClick={closeMenu}>
                                {subcategory.name}
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
          {/* 🔹 Search bar */}
          <form className="d-flex pe-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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

      {/* 🔹 Mobile: icons + auth dưới logo */}
      <div className="mobile-only mobile-icons-auth">
        <ul className="social-links">
          {[
            { icon: "facebook", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "youtube", link: "#" },
            { icon: "pinterest", link: "#" },
          ].map((item, i) => (
            <li key={i}>
              <a href={item.link} onClick={closeMenu}>
                <i className={`fab fa-${item.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>

        <ul className="auth-links">
          <li>
            <Link to={`/${ROUTERS.USER.LOGIN}`} onClick={closeMenu}>
              <i className="fa fa-user"></i> Login
            </Link>
          </li>
          <li>
            <Link
              to={`/${ROUTERS.USER.REGISTER}`}
              className="highlight"
              onClick={closeMenu}
            >
              <i className="fa fa-shopping-cart"></i> Register
            </Link>
          </li>
        </ul>
      </div>

      {/* 🔹 Overlay khi mở menu mobile */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default memo(Header);

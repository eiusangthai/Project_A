import { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
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
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Company Logo" />
          </Link>
        </div>

        <ul className="auth-links desktop-only">
          <li>
            <Link to="/login" onClick={closeMenu}>
              <i className="fa fa-user"></i> Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="highlight" onClick={closeMenu}>
              <i className="fa fa-shopping-cart"></i> Register
            </Link>
          </li>
        </ul>
      </div>

      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
        <div className="collapse navbar-collapse">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <span onClick={() => setProductsOpen(!productsOpen)}>
                Products ▾
              </span>
              <ul className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                {/* Category 1: Vợt Cầu Lông */}
                <li>
                  <Link to="/product/rackets" onClick={closeMenu}>
                    Vợt Cầu Lông
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/product/rackets/yonex" onClick={closeMenu}>
                        Vợt Yonex
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/rackets/victor" onClick={closeMenu}>
                        Vợt Victor
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/rackets/lining" onClick={closeMenu}>
                        Vợt Lining
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Category 2: Giày Cầu Lông */}
                <li>
                  <Link to="/product/shoes" onClick={closeMenu}>
                    Giày Cầu Lông
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/product/shoes/yonex" onClick={closeMenu}>
                        Giày Yonex
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/shoes/victor" onClick={closeMenu}>
                        Giày Victor
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/shoes/lining" onClick={closeMenu}>
                        Giày Lining
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Category 3: Áo Cầu Lông */}
                <li>
                  <Link to="/product/shirts" onClick={closeMenu}>
                    Áo Cầu Lông
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/product/shirts/yonex" onClick={closeMenu}>
                        Áo Yonex
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/shirts/vnb" onClick={closeMenu}>
                        Áo VNB
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/shirts/kamito" onClick={closeMenu}>
                        Áo Kamito
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Category 4: Túi Vợt */}
                <li>
                  <Link to="/product/bags" onClick={closeMenu}>
                    Túi Vợt
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/product/bags/yonex" onClick={closeMenu}>
                        Túi Yonex
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/bags/victor" onClick={closeMenu}>
                        Túi Victor
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/bags/lining" onClick={closeMenu}>
                        Túi Lining
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Category 5: Phụ Kiện */}
                <li>
                  <Link to="/product/accessories" onClick={closeMenu}>
                    Phụ Kiện
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/product/accessories/socks" onClick={closeMenu}>
                        Vớ Cầu Lông
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/accessories/strings" onClick={closeMenu}>
                        Cước Đan Vợt
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product/accessories/shuttlecock"
                        onClick={closeMenu}
                      >
                        Quả Cầu Lông
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/news" onClick={closeMenu}>
                News
              </Link>
            </li>
            <li className="dropdown">
              <span>Instructions ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/payment" onClick={closeMenu}>
                    Payment instructions
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
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
            <Link to="/login" onClick={closeMenu}>
              <i className="fa fa-user"></i> Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="highlight" onClick={closeMenu}>
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

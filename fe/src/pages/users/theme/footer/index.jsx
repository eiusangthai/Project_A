import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import cartIcon from "/src/assets/users/images/cartIcon/carticon.jpg";
import "./style.css";

const Footer = () => {
  const [cartCount, setCartCount] = useState(0);

  // 🔹 Hàm cập nhật số lượng sản phẩm
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("goTopBtn");
      if (window.scrollY > 100) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Khi component load, lấy dữ liệu ban đầu
  useEffect(() => {
    updateCartCount();
  }, []);

  // 🔹 Lắng nghe event "storage" (phát ra từ ShoppingCart)
  useEffect(() => {
    const handleStorage = () => updateCartCount();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return (
    <>
      {/* Nút giỏ hàng nổi bên trái */}
      <div className="popup_gio_hang">
        <Link
          className="a-hea text-decoration-none d-flex align-items-center"
          to={`/${ROUTERS.USER.SHOPPINGCART}`}
          title="Giỏ hàng"
        >
          <img src={cartIcon} alt="Giỏ hàng" />
          <div className="gio_hang_text">
            Xem giỏ hàng (<span className="count_item count_item_pr">{cartCount}</span>)
          </div>
        </Link>
      </div>
      {/* Nút go to top bên phải */}
      <div id="goTopBtn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
      {/* Footer chính */}
      <footer id="footer" className="footer bg-dark text-light pt-5">
        <div className="container">
          <div className="row">
            {/* Logo & Social */}
            <div className="col-md-4 mb-4">
              <div className="footer-widget">
                <div className="footer-logo mb-3">
                  <Link to={`/${ROUTERS.USER.HOME}`}>
                    <img
                      src="/logo.png"
                      alt="footer logo"
                      style={{ maxWidth: "150px" }}
                    />
                  </Link>
                </div>
                <p>
                  We provide high-quality badminton rackets, shuttlecocks, and
                  accessories to support players of all levels, from beginners
                  to professionals.
                </p>
                <ul className="list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="text-light fs-4" href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-light fs-4" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-light fs-4" href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-light fs-4" href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Menu */}
            <div className="col-md-2 mb-4">
              <h5>Menu</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light" to={`/${ROUTERS.USER.PROFILE}`}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-light" to={`/${ROUTERS.USER.NEWS}`}>
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link className="text-light" to={`/${ROUTERS.USER.CONTACT}`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  81 Nam Kỳ Khởi Nghĩa, Phường Bình Dương, Thành phố, Hồ Chí
                  Minh, Việt Nam
                </li>
                <li>
                  <i className="fas fa-phone me-2"></i>
                  038 888 8888
                </li>
                <li>
                  <i className="fas fa-envelope me-2"></i>
                  tuquy@gmail.com
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="col-md-3 mb-4">
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1957.903641029872!2d106.6658487109651!3d11.053070994197377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1758041472451!5m2!1svi!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom bg-secondary text-center py-3 mt-4">
          <div className="container">
            <p className="mb-0">
              Copyright © 2025 Distributed by{" "}
              <a
                href="https://github.com/Tuquyyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fw-bold"
              >
                Tuquy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);

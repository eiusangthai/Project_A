import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ROUTERS } from "../../../../utils/router";
import smashfaster from "/src/assets/users/images/ulikeit/smashfaster.jpg";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <div className="content-area">
        {/* ======= CỘT TRÁI: HƯỚNG DẪN THANH TOÁN ======= */}
        <article className="article-main">
          <h1 className="article-title">Hướng dẫn thanh toán</h1>
          <div className="posts">
            <div className="time-post">🕒 31-12-2024 09:11</div>
            <div className="time-post">✍ SQBSports</div>
          </div>

          <div className="rte">
            <p>
              <em>
                Bài viết được <Link to="/">ShopSQB</Link> - Hệ thống shop cầu
                lông hàng đầu Việt Nam biên soạn.
              </em>
            </p>

            <h2>1. Thanh toán trực tiếp tại cửa hàng</h2>
            <p>
              Quý khách có thể đến trực tiếp hệ thống cửa hàng SQB để mua hàng
              và thanh toán. Tại cửa hàng chấp nhận:
            </p>
            <ul>
              <li>💵 Tiền mặt</li>
              <li>🏧 Chuyển khoản ngân hàng</li>
              <li>💳 Quẹt thẻ ATM / Visa / MasterCard</li>
            </ul>

            <h2>2. Thanh toán khi mua online</h2>
            <p>
              Khi đặt hàng online tại ShopSQB, quý khách có thể lựa chọn hình
              thức:
            </p>
            <ul>
              <li>COD – Nhận hàng trả tiền tại nhà.</li>
              <li>Chuyển khoản ngân hàng trước khi giao hàng.</li>
            </ul>

            <div className="payment-info">
              <strong>Thông tin tài khoản ngân hàng:</strong>
              <p>Vietcombank - CN Phú Thọ, TP HCM</p>
              <p>
                STK: <b>111122223333444</b>
              </p>
              <p>
                Chủ tài khoản: <b>SQB badminton</b>
              </p>
            </div>

            <h2>3. Danh sách chi nhánh SQB</h2>

            <div className="ten_khu_vuc">
              📍 Khu vực Hồ Chí Minh & Bình Dương
            </div>
            <ul className="cn_list">
              <li>
                <h4>1. SQB Super Center</h4>
                <p>
                  <b>Địa chỉ:</b> 81 Nam Kỳ Khởi Nghĩa, Phường, Bình Dương, Hồ
                  Chí Minh, Việt Nam
                </p>
                <p>
                  <b>Hotline:</b>{" "}
                  <a href="tel:0388888888" className="phone">
                    038 888 8888
                  </a>
                </p>
                <p>
                  <b>Thanh toán:</b> Vietcombank - STK 111122223333444 - Chủ TK:
                  SQB badminton
                </p>
              </li>

              <li>
                <h4>2. SQB SUPER PREMIUM</h4>
                <p>
                  <b>Địa chỉ:</b> Nam Kỳ Khởi Nghĩa, Định Hoà, Thủ Dầu Một, Bình
                  Dương, Việt Nam
                </p>
                <p>
                  <b>Hotline:</b>{" "}
                  <a href="tel:0389999999" className="phone">
                    038 999 9999
                  </a>
                </p>
                <p>
                  <b>Thanh toán:</b> Techcombank - STK 111122223333444 - Chủ TK:
                  Nguyễn Văn B
                </p>
              </li>
            </ul>
          </div>
        </article>

        {/* ======= CỘT PHẢI: SIDEBAR ======= */}
        <aside className="sidebar">
          {/* Danh mục tin tức */}
          <nav className="nav-category">
            <h3>Danh mục tin tức</h3>
            <Link to="/news/khuyen-mai" className="nav-link">
              🏷 Khuyến mãi
            </Link>
            <Link to={`/${ROUTERS.USER.NEWS}`} className="nav-link">
              🏸 Tin cầu lông
            </Link>
            <Link to="/news/meo-tap-luyen" className="nav-link">
              💡 Mẹo tập luyện
            </Link>
            <Link to={`/${ROUTERS.USER.PRODUCTS}`} className="nav-link">
              🛍 Sản phẩm mới
            </Link>
          </nav>

          {/* Bạn có thể thích */}
          <div className="blog_content">
            <h3>Bạn có thể thích</h3>

            <div className="item">
              <img src="/badmintonProduct/rackets.jpg" alt="tin 1" />
              <div>
                <h4>
                  <Link to="/news/cach-chon-vot-cau-long">
                    Cách chọn vợt cầu lông cho người mới
                  </Link>
                </h4>
                <div className="time-post">🕒 29-09-2025</div>
              </div>
            </div>

            <div className="item">
              <img src="/badmintonProduct/shoes.jpg" alt="tin 2" />
              <div>
                <h4>
                  <Link to="/news/top-giay-cau-long-2024">
                    Top giày cầu lông bán chạy nhất 2024
                  </Link>
                </h4>
                <div className="time-post">🕒 10-09-2025</div>
              </div>
            </div>

            <div className="item">
              <img src={smashfaster} alt="tin 3" />
              <div>
                <h4>
                  <Link to="/news/5-meo-smash-manh-hon">
                    5 mẹo nhỏ giúp smash mạnh hơn
                  </Link>
                </h4>
                <div className="time-post">🕒 02-08-2025</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default memo(PaymentPage);

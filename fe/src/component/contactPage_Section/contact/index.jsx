import { memo } from "react";
import "./style.css";

const branches = [
  {
    id: 1,
    name: "SQB Super Center",
    address: "81 Nam Kỳ Khởi Nghĩa, phường, Bình Dương, Hồ Chí Minh, Việt Nam",
    phone: "038 888 8888",
    map: "https://maps.app.goo.gl/dCA2issmb7C1cb8p8",
  },
  {
    id: 2,
    name: "SQB SUPER PREMIUM",
    address: "Nam Kỳ Khởi Nghĩa, Định Hoà, Thủ Dầu Một, Bình Dương, Việt Nam",
    phone: "038 999 9999",
    map: "https://maps.app.goo.gl/dCA2issmb7C1cb8p8",
  },
];

const Contact = () => {
  return (
    <div className="layout-contact">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-12">
            <div className="contact">
              <h4>Nơi giải đáp toàn bộ mọi thắc mắc của bạn?</h4>
              <div className="des_foo"></div>
              <div className="time_work">
                <div className="item">
                  <b>Hotline:</b>{" "}
                  <a
                    className="fone"
                    href="tel:038 888 8888 | 038 999 9999"
                    title="038 888 8888 | 038 999 9999"
                  >
                    038 888 8888 | 038 999 9999
                  </a>
                </div>
                <div className="item">
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:info@sqbbadminton.com"
                    title="info@sqbbadminton.com"
                  >
                    info@sqbbadminton.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-contact">
              <h4>Liên hệ với chúng tôi</h4>
              <form
                acceptCharset="UTF-8"
                id="contact"
                method="post"
                className="has-validation-callback"
              >
                <input type="hidden" name="act" value="gui" />
                <div className="group_contact">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        name="ten"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control form-control-lg"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <input
                        type="number"
                        placeholder="Điện thoại"
                        name="so_dt"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <textarea
                        placeholder="Nội dung"
                        name="noi_dung"
                        className="form-control content-area form-control-lg"
                        rows="5"
                        required
                      ></textarea>
                      <button type="submit" className="btn-lienhe">
                        Gửi thông tin
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-12">
            <div className="logos text-start mb-3">
              <a href="" className="logo-wrapper">
                <img
                  src="./logo.png"
                  alt="SQBbadminton"
                  className="img-responsive"
                />
              </a>
            </div>

            <ul className="widget-menu contact-info-page cn_list list-unstyled">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a
                    href="javascript:;"
                    data-ban_do={branch.map}
                    data-ten={branch.name}
                    data-dia_chi={branch.address}
                    data-so_dt={branch.phone}
                    data-id={branch.id}
                    className="map_lien_he"
                  >
                    <strong>
                      {branch.id}. {branch.name}
                    </strong>
                  </a>{" "}
                  - <i className="fa fa-phone color-x"></i>{" "}
                  <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                  <br />
                  <i className="fa fa-map-marker color-x"></i>{" "}
                  <span>{branch.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);

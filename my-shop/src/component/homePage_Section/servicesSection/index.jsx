import React from "react";
import "./style.css";
const services = [
  {
    id: 1,
    img: "https://cdn.shopvnb.com/themes/images/policy_image_2.svg",
    alt: "Vận chuyển toàn quốc",
    text: (
      <>
        Vận chuyển <span>TOÀN QUỐC</span> <br /> Thanh toán khi nhận hàng
      </>
    ),
  },
  {
    id: 2,
    img: "https://cdn.shopvnb.com/themes/images/policy_image_1.svg",
    alt: "Bảo đảm chất lượng",
    text: (
      <>
        <span>Bảo đảm chất lượng</span> <br /> Sản phẩm bảo đảm chất lượng.
      </>
    ),
  },
  {
    id: 3,
    img: "https://cdn.shopvnb.com/themes/images/thanh_toan.svg",
    alt: "Thanh toán",
    text: (
      <>
        Tiến hành <span>THANH TOÁN</span> <br /> Với nhiều{" "}
        <span>PHƯƠNG THỨC</span>
      </>
    ),
  },
  {
    id: 4,
    img: "https://cdn.shopvnb.com/themes/images/doi_san_pham.svg",
    alt: "Đổi sản phẩm mới",
    text: (
      <>
        <span>Đổi sản phẩm mới</span> <br /> nếu sản phẩm lỗi
      </>
    ),
  },
];

const ServiceSection = () => {
  return (
    <div className="section_services">
      <div className="container">
        <div className="row promo-box">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="promo-item">
                <div className="icon">
                  <img
                    width="50"
                    height="50"
                    src={service.img}
                    alt={service.alt}
                  />
                </div>
                <div className="info">{service.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

import React from "react";
import "./style.css";

const ShopProfile = () => {
  return (
    <section className="shop_profile">
      <div className="container profile_wrapper">
        <div className="profile_image">
          <div className="image_wrap">
            <img
              src="/shopProfile/Sport Shop.jpg"
              alt="Sport Shop"
              loading="lazy"
            />
            <div className="image_overlay"></div>
          </div>
        </div>

        <div className="profile_content">
          <h2>
            <span>🏆 SQB badminton</span>
            <br />
            Dụng cụ thể thao chính hãng
          </h2>
          <p>
            Chúng tôi mang đến <strong>dụng cụ thể thao cao cấp</strong> từ các
            thương hiệu quốc tế. Với sứ mệnh{" "}
            <em>khơi dậy tinh thần thể thao</em>, chúng tôi cung cấp trải nghiệm
            mua sắm hiện đại và dịch vụ tận tâm.
          </p>
          <ul>
            <li> Sản phẩm chính hãng 100%</li>
            <li> Dịch vụ tư vấn chuyên nghiệp</li>
            <li> Giao hàng nhanh chóng toàn quốc</li>
            <li> Đa dạng sản phẩm thể thao</li>
          </ul>
          <a href="#products" className="btn_shop">
            Khám phá ngay →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopProfile;

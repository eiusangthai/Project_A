import React from "react";
import "./style.css";

const MissionVision = () => {
  return (
    <section className="mission_vision">
      <div className="container">
        <h2>Tầm Nhìn & Sứ Mệnh</h2>
        <div className="mv_grid">
          <div className="mv_card">
            <h3>🌍 Tầm Nhìn</h3>
            <p>
              Trở thành <strong>chuỗi cửa hàng thể thao hàng đầu</strong> tại
              Việt Nam, nơi khách hàng luôn tìm thấy sản phẩm chất lượng và dịch
              vụ tận tâm nhất.
            </p>
          </div>
          <div className="mv_card">
            <h3>🔥 Sứ Mệnh</h3>
            <p>
              Khơi dậy tinh thần thể thao, nâng cao sức khỏe cộng đồng bằng cách
              cung cấp sản phẩm <em>uy tín - chính hãng - giá trị cao</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

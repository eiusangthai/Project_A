import React from "react";
import "./style.css";

const reasons = [
  {
    icon: "💯",
    title: "Chính hãng 100%",
    desc: "Tất cả sản phẩm đều được nhập trực tiếp từ nhà phân phối uy tín.",
  },
  {
    icon: "⚡",
    title: "Giao hàng nhanh",
    desc: "Hệ thống giao hàng toàn quốc, đảm bảo tốc độ và an toàn.",
  },
  {
    icon: "🤝",
    title: "Dịch vụ tận tâm",
    desc: "Đội ngũ nhân viên am hiểu và luôn sẵn sàng hỗ trợ khách hàng.",
  },
  {
    icon: "🏋️",
    title: "Đa dạng sản phẩm",
    desc: "Cung cấp đầy đủ dụng cụ từ tennis, gym, bóng đá, cầu lông và nhiều hơn.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why_choose_us">
      <div className="container">
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <div className="reasons_grid">
          {reasons.map((item, index) => (
            <div key={index} className="reason_card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

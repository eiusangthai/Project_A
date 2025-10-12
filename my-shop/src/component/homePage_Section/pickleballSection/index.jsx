import React, { memo } from "react";
import "./style.css";

const PickleballSection = () => {
  const products = [
    {
      href: "",
      title: "Vợt PickleBall",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/vot-pickleball_1718941016.jpg",
    },
    {
      href: "",
      title: "Giày Pickleball",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/giay-pickleball_1718941327.jpg",
    },
    {
      href: "",
      title: "Túi Pickleball",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/tui-pickleball_1718941360.jpg",
    },
    {
      href: "",
      title: "Áo Pickleball",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/ao-pickleball_1718941625.jpg",
    },
  ];

  return (
    <section className="section_pickleball py-5">
      <div className="container">
        <div className="title_modules text-center mb-4">
          <h2>
            <span>Sản phẩm Pickleball</span>
          </h2>
        </div>

        <div className="row g-4">
          {products.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <a href={item.href} className="pickle-card">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <p>{item.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PickleballSection);

import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { ROUTERS } from "../../../utils/router";

const PickleballSection = () => {
  const products = [
    {
      href: `/${ROUTERS.USER.PRODUCTS}/pickleball-rackets`,
      title: "Vợt PickleBall",
      img: "/pickleballProduct/racket.jpg",
    },
    {
      href: `/${ROUTERS.USER.PRODUCTS}/pickleball-shoes`,
      title: "Giày Pickleball",
      img: "/pickleballProduct/shoes.jpg",
    },
    {
      href: `/${ROUTERS.USER.PRODUCTS}/pickleball-bags`,
      title: "Túi Pickleball",
      img: "/pickleballProduct/bag.jpg",
    },
    {
      href: `/${ROUTERS.USER.PRODUCTS}/pickleball-shirts`,
      title: "Áo Pickleball",
      img: "/pickleballProduct/shirt.jpg",
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
              <Link to={item.href} className="pickle-card">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <p>{item.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PickleballSection);

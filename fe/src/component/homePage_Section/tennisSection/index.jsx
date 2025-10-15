import React from "react";
import "./style.css";

const tennisProducts = [
  {
    title: "Vợt Tennis",
    link: "#",
    img: "public/tennisProduct/rackets.jpg",
    alt: "Vợt Tennis",
  },
  {
    title: "Giày Tennis",
    link: "#",
    img: "public/tennisProduct/shoes.jpg",
    alt: "Giày Tennis",
  },
  {
    title: "Balo tennis",
    link: "#",
    img: "public/tennisProduct/balo.jpg",
    alt: "Balo tennis",
  },
  {
    title: "Túi Tennis",
    link: "#",
    img: "public/tennisProduct/bag.jpg",
    alt: "Túi Tennis",
  },
];

const TennisSection = () => {
  return (
    <section className="section_banner">
      <div className="container">
        <div className="title_modules">
          <h2>
            <a href="#" title="Tennis">
              <span>Sản phẩm Tennis</span>
            </a>
          </h2>
        </div>
        <div className="row">
          {tennisProducts.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6"
            >
              <div className="snip_banner">
                <img src={item.img} alt={item.alt} loading="lazy" />
                <div className="content_banner">
                  <p>{item.title}</p>
                </div>
                <a
                  href={item.link}
                  title={item.title}
                  className="overlay_link"
                ></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TennisSection;

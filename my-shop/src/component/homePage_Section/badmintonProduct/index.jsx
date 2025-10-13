import { memo } from "react";
import "./style.css";

const BadmintonSection = () => {
  const products = [
    {
      href: "",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/1.1.webp",
      title: "Vợt cầu lông",
    },
    {
      href: "",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/2_1.webp",
      title: "Giày cầu lông",
    },
    {
      href: "",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/3_1.webp",
      title: "Áo cầu lông",
    },
    {
      href: "",
      img: "https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/4.webp",
      title: "Quần cầu lông",
    },
  ];

  return (
    <section className="section_badminton py-5">
      <div className="container">
        <div className="title_modules mb-4 text-center">
          <h2>
            <span>Sản phẩm cầu lông</span>
          </h2>
        </div>

        <div className="row g-4">
          {products.map((item, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <a href={item.href} className="badminton-card">
                <div className="image-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <p className="title">{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(BadmintonSection);

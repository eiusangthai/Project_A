import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";

const categories = [
  { id: "0", name: "Tất cả" },
  { id: "7", name: "Vợt Cầu Lông" },
  { id: "4", name: "Giày Cầu Lông" },
  { id: "6", name: "Áo Cầu Lông" },
  { id: "156", name: "Váy cầu lông" },
  { id: "3", name: "Quần Cầu Lông" },
  { id: "1", name: "Túi Vợt Cầu Lông" },
  { id: "2", name: "Balo Cầu Lông" },
  { id: "11", name: "Phụ Kiện Cầu Lông" },
  { id: "256", name: "Vợt PickleBall" },
  { id: "318", name: "Giày Pickleball" },
  { id: "325", name: "Túi Pickleball" },
  { id: "322", name: "Áo Pickleball" },
  { id: "323", name: "Quần Pickleball" },
  { id: "306", name: "Bóng Pickleball" },
  { id: "210", name: "Vợt Tennis" },
  { id: "211", name: "Giày Tennis" },
  { id: "212", name: "Balo tennis" },
  { id: "213", name: "Túi Tennis" },
  { id: "214", name: "Chân Váy Tennis" },
  { id: "248", name: "Áo tennis" },
  { id: "249", name: "Quần tennis" },
  { id: "238", name: "Phụ Kiện Tennis" },
  { id: "154", name: "Giày Running" },
  { id: "202", name: "Mũ" },
  { id: "273", name: "Phụ kiện sưu tầm" },
  { id: "305", name: "Phụ kiện Pickleball" },
  { id: "324", name: "Balo Pickleball" },
  { id: "425", name: "Vợt Pickleball Taro" },
];

// Sản phẩm mẫu
const allProducts = [
  {
    id: 1,
    name: "Vợt Yonex Astrox 99",
    price: 2500000,
    catId: "7",
    image: "/newProduct/99pro.jpg",
  },
  {
    id: 2,
    name: "Giày Yonex 65Z3",
    price: 1800000,
    catId: "4",
    image: "/newProduct/65z3.jpg",
  },
  {
    id: 3,
    name: "Áo cầu lông Lining",
    price: 350000,
    catId: "6",
    image: "/newProduct/lining.jpg",
  },
  {
    id: 4,
    name: "Váy cầu lông nữ",
    price: 420000,
    catId: "156",
    image: "/newProduct/skirtTaro.jpg",
  },
  {
    id: 5,
    name: "Quần cầu lông Yonex",
    price: 320000,
    catId: "3",
    image: "/newProduct/shortYonex.jpg",
  },
  {
    id: 6,
    name: "Túi vợt Yonex 9 ngăn",
    price: 1500000,
    catId: "1",
    image: "/newProduct/bagYonex.jpg",
  },
  {
    id: 7,
    name: "Balo cầu lông Adidas",
    price: 890000,
    catId: "2",
    image: "/newProduct/bagAddidas.jpg",
  },
  {
    id: 8,
    name: "Phụ kiện quấn cán",
    price: 50000,
    catId: "11",
    image: "/newProduct/items.jpg",
  },
  {
    id: 9,
    name: "Vợt Pickleball Taro",
    price: 2200000,
    catId: "256",
    image: "/newProduct/racketPickleball.jpg",
  },
  {
    id: 10,
    name: "Vợt Tennis Wilson Pro Staff",
    price: 4500000,
    catId: "210",
    image: "/newProduct/racketTennis.jpg",
  },
];

const NewProductSection = () => {
  const [activeTab, setActiveTab] = useState("0");

  const filteredProducts =
    activeTab === "0"
      ? allProducts
      : allProducts.filter((p) => p.catId === activeTab);

  return (
    <section className="section_flash_sale">
      <div className="container">
        <div className="title_modules">
          <h2>
            <a href="/product" title="#Sản phẩm mới">
              <span>Sản phẩm mới</span>
            </a>
          </h2>
        </div>

        {/* Tabs bằng Swiper */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          className="tabs-swiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id} style={{ width: "auto" }}>
              <div
                className={`tab-link ${activeTab === cat.id ? "current" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nội dung sản phẩm */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price.toLocaleString()} đ</p>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="no-products">Không có sản phẩm nào.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewProductSection;

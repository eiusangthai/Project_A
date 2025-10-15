import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import rackets from "../../../assets/users/images/saleProduct/rackets.jpg";
import shoes from "../../../assets/users/images/saleProduct/shoes.jpg";
import shirt from "../../../assets/users/images/saleProduct/shirt.jpg";
import bag from "../../../assets/users/images/saleProduct/bag.jpg";

const saleoffItems = [
  {
    title: "Vợt Cầu Lông",
    link: "",
    img: rackets,
    alt: "Vợt Cầu Lông",
  },
  {
    title: "Giày Cầu Lông",
    link: "",
    img: shoes,
    alt: "Giày Cầu Lông",
  },
  {
    title: "Áo Cầu Lông",
    link: "",
    img: shirt,
    alt: "Áo Cầu Lông",
  },
  {
    title: "Túi Vợt",
    link: "",
    img: bag,
    alt: "Túi Vợt",
  },
];

const SaleoffSection = () => {
  return (
    <section className="section_saleoff">
      <div className="container">
        <div className="title_modules">
          <h2>
            <a href="/thanh-ly" title="Thanh lý">
              <span>Sale off</span>
            </a>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="saleoff-swiper"
        >
          {saleoffItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="saleoff-card">
                <a href={item.link} title={item.title}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    width="406"
                    height="136"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span>{item.title}</span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SaleoffSection;

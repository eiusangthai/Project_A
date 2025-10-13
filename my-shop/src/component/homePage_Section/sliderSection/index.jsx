import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // 👈 thêm modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const slides = [
  {
    href: "",
    title: "99 gen 3",
    src: "https://cdn.shopvnb.com/img/1920x640/uploads/slider/yonex-astrox-99_1757731351.webp",
  },
  {
    href: "",
    title: "Nanoflare 700",
    src: "https://cdn.shopvnb.com/img/1920x640/uploads/slider/thiet-ke-chua-co-ten-12_1727137763.webp",
  },
  {
    href: "",
    title: "Yonex 65Z3",
    src: "https://cdn.shopvnb.com/img/1920x640/uploads/slider/65z3ltd-launch-website_1695177820.webp",
  },
  {
    href: "",
    title: "nanoflare 1000",
    src: "https://cdn.shopvnb.com/img/1920x640/uploads/slider/1000z-launch-website-banner_1695177885.webp",
  },
  {
    href: "",
    title: "ynx-eclp",
    src: "https://cdn.shopvnb.com/img/1920x640/uploads/slider/ynx-eclp-banner_1695178004.webp",
  },
];

const SliderSection = () => {
  return (
    <div className="section_slider">
      <Swiper
        loop={true}
        navigation={true} // 👈 bật nút prev/next
        pagination={{ clickable: true }} // 👈 bật chấm tròn
        modules={[Navigation, Pagination]} // 👈 nạp module
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <a href={slide.href} title={slide.title}>
              <img src={slide.src} alt={slide.title} className="slider-image" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(SliderSection);

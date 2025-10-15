import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // 👈 thêm modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import astrox99 from "../../../assets/users/images/slider/yonex-astrox-99.jpg"
import graht from "../../../assets/users/images/slider/grpht-thrttl.jpg"
import va from "../../../assets/users/images/slider/victor-axelsen.jpg"
import nanoflare from "../../../assets/users/images/slider/1000z.jpg"
import ynx_eclp from "../../../assets/users/images/slider/ynx_eclp_banner.jpg"

const slides = [
  {
    href: "",
    title: "99 gen 3",
    src: astrox99,
  },
  {
    href: "",
    title: "Graht thrttl",
    src: graht,
  },
  {
    href: "",
    title: "VA",
    src: va,
  },
  {
    href: "",
    title: "nanoflare 1000",
    src: nanoflare,
  },
  {
    href: "",
    title: "ynx-eclp",
    src: ynx_eclp,
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

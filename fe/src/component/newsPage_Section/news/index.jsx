import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

const newsList = [
  {
    id: 1,
    title: "Review sân Pickleball Trung Sơn tại Bình Chánh, TP.HCM",
    link: `/${ROUTERS.USER.NEWS}/review-san-pickleball-trung-son`,
    img: "/newsImages/san-pickleball-trung-son.jpg",
    time: "27-09-2025 15:07",
    desc: "Sân Pickleball Trung Sơn tọa lạc tại huyện Bình Chánh, TP.HCM, được nhiều người chơi đánh giá cao nh...",
  },
  {
    id: 2,
    title:
      "Nắm Vững Những Cách Di Chuyển Trong Pickleball Giúp Bạn Làm Chủ Sân Chơi",
    link: `/${ROUTERS.USER.NEWS}/cach-di-chuyen-trong-pickleball`,
    img: "/newsImages/cach-di-chuyen-trong-pickleball.jpg",
    time: "27-09-2025 14:20",
    desc: "Di chuyển thông minh là chìa khóa giúp bạn làm chủ sân pickleball. Dù là đánh đơn hay đánh đôi, việc...",
  },
  {
    id: 3,
    title:
      "DUPR Pickleball: Giới thiệu tổng quan và hướng dẫn cách tính DUPR Pickleball",
    link: `/${ROUTERS.USER.NEWS}/dupr-pickleball`,
    img: "/newsImages/dupr-pickleball.jpg",
    time: "27-09-2025 11:03",
    desc: "DUPR Pickleball hiện là hệ thống xếp hạng năng động và được ưa chuộng nhất trong cộng đồng picklebal...",
  },
  {
    id: 4,
    title:
      "So sánh pickleball đơn và đôi: Phân tích chi tiết về hai hình thức thi đấu",
    link: `/${ROUTERS.USER.NEWS}/so-sanh-pickleball-don-va-doi`,
    img: "/newsImages/so-sanh-pickleball-don-va-doi.jpg",
    time: "27-09-2025 09:42",
    desc: "Pickleball có thể chơi theo hình thức đơn hoặc đôi, tuy nhiên có nhiều sự khác biệt về luật chơi, tố...",
  },
  {
    id: 5,
    title:
      "Cách cầm vợt Pickleball đơn giản và hiệu quả dành cho người mới chơi",
    link: `/${ROUTERS.USER.NEWS}/cach-cam-vot-pickleball`,
    img: "/newsImages/cach-cam-vot-pickleball.jpg",
    time: "27-09-2025 08:06",
    desc: "Để chơi Pickleball một cách hiệu quả, thì cách cầm vợt là yếu tố rất quan trọng, đặc biệt là những n...",
  },
  {
    id: 6,
    title:
      "So sánh vợt Pickleball 14mm và 16mm: Tìm hiểu chi tiết về những điểm khác nhau",
    link: `/${ROUTERS.USER.NEWS}/so-sanh-vot-pickleball-14mm-va-16mm`,
    img: "/newsImages/so-sanh-vot-pickleball-14mm-va-16mm.jpg",
    time: "26-09-2025 16:10",
    desc: "Khi chọn mua vợt Pickleball, độ dày mặt vợt là yếu tố quan trọng ảnh hưởng trực tiếp đến lối chơi và...",
  },
];

const News = () => {
  return (
    <section className="section_blog">
      <div className="container">
        <div className="title_modules">
          <h2>
            <Link to={`/${ROUTERS.USER.NEWS}`} title="Tin tức mới">
              <span>Tin tức mới</span>
            </Link>
          </h2>
        </div>

        <div className="block-blog">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="blog-swiper"
          >
            {newsList.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="item-blog">
                  <div className="block-thumb">
                    <Link className="thumb" to={news.link} title={news.title}>
                      <img
                        src={news.img}
                        alt={news.title}
                        width="400"
                        height="240"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="block-content">
                    <h3>
                      <Link to={news.link} title={news.title}>
                        {news.title}
                      </Link>
                    </h3>
                    <p className="time-post">
                      <span>{news.time}</span>
                    </p>
                    <p className="justify">{news.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(News);

import styles from "./ExampleWorks.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const ExampleWorks = ({ items }) => {
  const [initialized, setInitialized] = useState(false);

  const swiperOptions = {
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <Swiper {...swiperOptions}>
      {items?.map((item) => (
        <SwiperSlide key={item.id} className={styles["example__item"]}>
          <div className={styles["example__img-wrapper"]}>
            <img src={item} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExampleWorks;

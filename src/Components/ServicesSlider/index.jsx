"use client";

import "swiper/css";
import styles from "./ServicesSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import ServicesItem from "../ServicesItem";

const swiperSettings = {
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
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
};

const ServicesSlider = ({ items }) => {
  return (
    items && (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className={styles["swiper-services"]}
        {...swiperSettings}
      >
        {items.map((el) => (
          <SwiperSlide key={el.id}>
            <ServicesItem name={el.nameService} image={el.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default ServicesSlider;

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

const ServicesSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      className={styles["swiper-services"]}
      {...swiperSettings}
    >
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
      <SwiperSlide>
        <ServicesItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ServicesSlider;

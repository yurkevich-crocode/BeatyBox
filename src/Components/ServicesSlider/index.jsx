"use client";

import "swiper/css";
import styles from "./ServicesSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import ServicesItem from "../ServicesItem";
import { useState, useEffect } from "react";

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
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (items && items.length > 0 && !initialized) {
      setInitialized(true);
    }
  }, [items, initialized]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      className={styles["swiper-services"]}
      {...swiperSettings}
    >
      {initialized ? (
        items.map((el) => (
          <SwiperSlide key={el.id}>
            <ServicesItem
              name={el.nameService}
              image={el.image}
              loading={false}
            />
          </SwiperSlide>
        ))
      ) : (
        <>
          <SwiperSlide key={1}>
            <ServicesItem loading={true} />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <ServicesItem loading={true} />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <ServicesItem loading={true} />
          </SwiperSlide>
          <SwiperSlide key={4}>
            <ServicesItem loading={true} />
          </SwiperSlide>
          <SwiperSlide key={5}>
            <ServicesItem loading={true} />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default ServicesSlider;

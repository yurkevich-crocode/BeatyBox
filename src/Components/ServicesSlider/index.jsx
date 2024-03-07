"use client";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ServicesSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ServicesItem from "../ServicesItem";
import { useState, useEffect, useRef } from "react";

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
  navigation: {
    nextEl: "swiper-services__swiperNext",
    prevEl: "swiper-services__swiperBack",
  },
};

const ServicesSlider = ({ items }) => {
  const [slider, setSlider] = useState();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (items && items.length > 0 && !initialized) {
      setInitialized(true);
    }
  }, [items, initialized]);

  const handleInit = (e) => {
    setSlider(e);
  };

  const nextSlide = () => {
    slider.slideNext();
  };

  const prevSlide = () => {
    slider.slidePrev();
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      navigation
      slidesPerView={3}
      className={styles["swiper-services"]}
      {...swiperSettings}
      onSwiper={handleInit}
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

      <div className={styles["swiper-services__controls"]}>
        <div
          className={styles["swiper-services__swiperBack"]}
          onClick={prevSlide}
        />
        <div
          className={styles["swiper-services__swiperNext"]}
          onClick={nextSlide}
        />
      </div>
    </Swiper>
  );
};

export default ServicesSlider;

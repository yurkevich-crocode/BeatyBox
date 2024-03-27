"use client";

import styles from "./ServicesSlider.module.scss";

import ServicesItem from "../ServicesItem";
import { useState, useEffect } from "react";
import Title from "@/Components/Title";
import Subtitle from "@/Components/Subtitle";

const ServicesSlider = ({ items }) => {
  console.log(items);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (items && items.length > 0 && !initialized) {
      setInitialized(true);
    }
  }, [items, initialized]);

  return (
    <>
      <div className={styles["services__title-wrapper"]}>
        <Title>Найдите услугу из предложенных категорий</Title>
        <div className={styles["services__subtitle-wrapper"]}>
          <Subtitle>Мы подберем для вас лучшие салоны</Subtitle>.
        </div>
        <div className={styles["services__items"]}>
          {initialized ? (
            items.map((el) => (
              <ServicesItem
                name={el.name}
                image={el.image}
                loading={false}
                key={el.id}
              />
            ))
          ) : (
            <>
              <ServicesItem loading={true} key={1} />
              <ServicesItem loading={true} key={2} />
              <ServicesItem loading={true} key={3} />
              <ServicesItem loading={true} key={4} />
              <ServicesItem loading={true} key={5} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;

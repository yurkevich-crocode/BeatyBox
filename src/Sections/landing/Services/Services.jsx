"use client";

import Container from "@/Components/Container";
import styles from "./Services.module.scss";
import ServicesSlider from "@/Components/ServicesSlider";
import Title from "@/Components/Title";
import Subtitle from "@/Components/Subtitle";
import { useEffect, useState } from "react";

export const getAllServices = async () => {
  const result = await fetch("/api/getAllServices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await result.json();
  if (!response.error) {
    return response;
  }
};

const Services = () => {
  const [servicesItems, setServicesItems] = useState([]);

  useEffect(() => {
    getAllServices().then(({ data }) => {
      if (data) {
        setServicesItems([...data]);
      }
    });
  }, []);

  return (
    <section className={styles["services"]}>
      <Container>
        <div className={styles["services__wrapper"]}>
          <div className={styles["services__title-wrapper"]}>
            <Title>Найдите услугу из предложенных категорий</Title>
            <Subtitle>Мы подберем для вас лучшие салоны</Subtitle>
          </div>
          <ServicesSlider items={servicesItems} />
        </div>
      </Container>
    </section>
  );
};

export default Services;

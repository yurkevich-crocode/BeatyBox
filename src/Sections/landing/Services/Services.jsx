import Container from "@/Components/Container";
import styles from "./Services.module.scss";
import ServicesSlider from "@/Components/ServicesSlider";
import Title from "@/Components/Title";
import Subtitle from "@/Components/Subtitle";

const Services = () => {
  return (
    <section className={styles["services"]}>
      <Container>
        <div className={styles["services__wrapper"]}>
          <div className={styles["services__title-wrapper"]}>
            <Title>Найдите услугу из предложенных категорий</Title>
            <Subtitle>Мы подберем для вас лучшие салоны</Subtitle>
          </div>
          <ServicesSlider />
        </div>
      </Container>
    </section>
  );
};

export default Services;

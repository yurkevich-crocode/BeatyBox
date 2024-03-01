import Container from "@/Components/Container";
import styles from "./Breadcrumps.module.scss";

const Breadcrumps = () => {
  return (
    <section className={styles["breadcrumps"]}>
      <Container>
        <div className="breadcrumps__items">
          <a href="/">Главная</a>
          <a href="#">пейдж</a>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumps;

"use client";

import Container from "@/Components/Container";
import styles from "./Company.module.scss";

const Company = () => {
  const url = window.location.href.split("/").filter((part) => part !== "");

  return (
    <section className={styles["company"]}>
      <Container>
        <div className={styles["company__wrapper"]}>
          <h1>{url[3]}</h1>
        </div>
      </Container>
    </section>
  );
};

export default Company;

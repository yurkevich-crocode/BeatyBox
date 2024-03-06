"use client";

import Container from "@/Components/Container";

import styles from "./Hero.module.scss";
import Title from "@/Components/Title";
import Subtitle from "@/Components/Subtitle";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__img-wrapper"]}>
        <img src="./images/hero.jpg" alt="" />
      </div>
      <div className={styles["hero__wrapper"]}>
        <Container>
          <div className={styles["hero__content"]}>
            <div className={styles["hero__title-wrapper"]}>
              <Title heading={"h1"}>
                Откройте для себя удобство и качество
              </Title>
              <Subtitle emphasizing={true}>
                Находите, пользуйтесь, не отказывайте себе в лучшем, чтобы быть
                лучшей.
              </Subtitle>
            </div>
            <div className={styles["hero__search"]}>
              <input
                type="text"
                placeholder="Поиск услуг или заведений"
                className={styles["hero__search-input"]}
                onInput={(e) => setSearchValue(e.target.value)}
              />
              <Link href={`/${searchValue}`}>
                <button>search</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;

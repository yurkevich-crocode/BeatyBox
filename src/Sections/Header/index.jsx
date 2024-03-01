"use client";

import Container from "@/Components/Container";
import styles from "./Header.module.scss";
import Logo from "@/Components/Logo";

import { useEffect, useState } from "react";

const Header = ({ land }) => {
  const [headerScrolledPast, setHeaderScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let num;
      land ? (num = 2) : (num = 1);
      const sectionTop = document
        .querySelector(`section:nth-child(${num})`)
        .getBoundingClientRect().top;

      if (sectionTop < 40) {
        setHeaderScrolledPast(true);
      } else {
        setHeaderScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={styles[headerScrolledPast ? `header__active` : `header`]}
    >
      <Container>
        <div className={styles["header__wrapper"]}>
          <Logo />
          <div className={styles["header__inputs"]}>
            <input
              type="text"
              className={styles["header__input"]}
              placeholder="Название услуги"
            />
            <input
              type="text"
              className={styles["header__input"]}
              placeholder="В каком городе"
            />
            <button className={styles["header__input"]}>Искать</button>
          </div>
          <div className="header__auth">
            <img src="./icons/icon_profile.svg" alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

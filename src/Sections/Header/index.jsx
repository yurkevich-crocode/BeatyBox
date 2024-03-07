"use client";

import Container from "@/Components/Container";
import styles from "./Header.module.scss";
import Logo from "@/Components/Logo";

import { useEffect, useState } from "react";

const Header = ({ land }) => {
  const [headerScrolledPast, setHeaderScrolledPast] = useState(false);

  const handleScroll = () => {
    const sectionTop = document
      .querySelector(`section:nth-child(${land ? 2 : 1})`)
      .getBoundingClientRect().top;

    if (sectionTop < 40) {
      setHeaderScrolledPast(true);
    } else {
      setHeaderScrolledPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {land ? (
        <header
          className={styles[headerScrolledPast ? "header__active" : "header"]}
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
                <input
                  type="text"
                  className={styles["header__input"]}
                  placeholder="Язык"
                />
                <button className={styles["header__input"]}>Искать</button>
              </div>
              <div className="header__auth">
                <img src="./icons/icon_profile.svg" alt="" />
              </div>
            </div>
          </Container>
        </header>
      ) : (
        <header className={styles["header__active"]}>
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
                <input
                  type="text"
                  className={styles["header__input"]}
                  placeholder="Язык"
                />
                <button className={styles["header__input"]}>Искать</button>
              </div>
              <div className="header__auth">
                <img src="./icons/icon_profile.svg" alt="" />
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;

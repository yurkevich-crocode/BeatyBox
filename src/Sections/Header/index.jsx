"use client";

import Container from "@/Components/Container";
import styles from "./Header.module.scss";
import Logo from "@/Components/Logo";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header = ({ land }) => {
  const [searchValue, setSearchValue] = useState("");

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
                  onInput={(e) => setSearchValue(e.target.value)}
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
                <Link href={`/${searchValue}`}>
                  <button className={styles["header__input"]}>Искать</button>
                </Link>
              </div>
              <div className={styles["header__auth"]}>
                <img src="/icons/icon_profile.svg" alt="" />
              </div>
            </div>
          </Container>
        </header>
      ) : (
        <header className={styles["header__active"]}>
          <Container>
            <div className={styles["header__wrapper"]}>
              <Logo className={styles["header__logo"]} />
              <div className={styles["header__inputs"]}>
                <input
                  type="text"
                  className={styles["header__input"]}
                  placeholder="Название услуги"
                  onInput={(e) => setSearchValue(e.target.value)}
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
                <Link href={`/example/${searchValue}`}>
                  <button className={styles["header__input"]}>Искать</button>
                </Link>
              </div>
              <div className={styles["header__auth"]}>
                <img src="/icons/icon_profile.svg" alt="" />
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;

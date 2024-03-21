import Container from "@/Components/Container";
import styles from "./Auth.module.scss";
import Title from "@/Components/Title";
import Link from "next/link";

const Auth = ({ variant }) => {
  return variant === "login" ? (
    <section className={styles["auth"]}>
      <Container>
        <div className={styles["auth__wrapper"]}>
          <Title>Авторизация</Title>
          <div className={styles["auth__inputs"]}>
            <input
              type="email"
              placeholder="Электронная почта"
              className={styles["auth__input"]}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles["auth__input"]}
            />
            <button className={styles["auth__btn"]}>Войти</button>
          </div>
          <div className={styles["auth__text-wrapper"]}>
            Если у вас нет профиля, то перейдите к{" "}
            <Link href={`/lk/registration`} className={styles["auth__reg"]}>
              регистрации
            </Link>
          </div>
        </div>
      </Container>
    </section>
  ) : (
    <section className={styles["auth"]}>
      <Container>
        <div className={styles["auth__wrapper"]}>
          <Title>Регистрация</Title>
          <div className={styles["auth__inputs"]}>
            <input
              type="email"
              placeholder="Электронная почта"
              className={styles["auth__input"]}
            />
            <input
              type="email"
              placeholder="Повторите электронную почту"
              className={styles["auth__input"]}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles["auth__input"]}
            />
            <button className={styles["auth__btn"]}>Зарегестрироваться</button>
          </div>
          <div className={styles["auth__text-wrapper"]}>
            Если у вас уже есть профиль, то перейдите к{" "}
            <Link href={`/lk/login`} className={styles["auth__reg"]}>
              авторизации
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Auth;

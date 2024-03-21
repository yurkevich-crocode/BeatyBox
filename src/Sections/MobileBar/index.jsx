import Link from "next/link";
import styles from "./MobileBar.module.scss";
import Container from "@/Components/Container";

const MobileBar = () => {
  return (
    <div className={styles["mobile-bar"]}>
      <Container>
        <div className={styles["mobile-bar__wrapper"]}>
          <Link href={`/lk/login`} className={styles["mobile-bar__item"]}>
            <img src="/icons/icon_profile.svg" alt="" />
            <span className={styles["mobile-bar__name"]}>Профиль</span>
          </Link>
          <Link href="#" className={styles["mobile-bar__item-white"]}>
            <img src="/icons/loupe.svg" alt="" />
            <span className={styles["mobile-bar__name"]}>Поиск</span>
          </Link>
          <Link href="#" className={styles["mobile-bar__item"]}>
            <img src="/icons/companies.svg" alt="" />
            <span className={styles["mobile-bar__name"]}>Салоны</span>
          </Link>
          <Link href="#" className={styles["mobile-bar__item"]}>
            <img src="/icons/services.svg" alt="" />
            <span className={styles["mobile-bar__name"]}>Услуги</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MobileBar;

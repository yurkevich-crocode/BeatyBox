import Container from "@/Components/Container";
import styles from "./Footer.module.scss";
import Logo from "@/Components/Logo";

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <Container>
        <div className={styles["footer__wrapper"]}>
          <div className={styles["footer__row"]}>
            <Logo />
            <span>©{curYear} BeautyBox. Все права защищены</span>
          </div>
          <div className={styles["footer__row"]}>
            <div className={styles["footer__soc-items"]}>
              <a href="#">
                <img src="/icons/VK.svg" alt="" />
              </a>
              <a href="#">
                <img src="/icons/Telegram.svg" alt="tg" />
              </a>
              <a href="#">
                <img src="/icons/Instagram.svg" alt="inst" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

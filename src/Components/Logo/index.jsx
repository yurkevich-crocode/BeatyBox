import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href={"/"}>
      <span className={styles["logo"]}>BeautyBox</span>
    </Link>
  );
};

export default Logo;

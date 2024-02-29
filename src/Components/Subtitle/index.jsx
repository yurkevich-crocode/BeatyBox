import styles from "./Subtitle.module.scss";

const Subtitle = ({ emphasizing, children }) => {
  return emphasizing ? (
    <p className={styles["subtitle__emphas"]}>{children}</p>
  ) : (
    <p className={styles["subtitle"]}>{children}</p>
  );
};

export default Subtitle;

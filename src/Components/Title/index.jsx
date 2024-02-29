import styles from "./Title.module.scss";

const Title = ({ heading, children }) => {
  return heading == "h1" ? (
    <h1 className={styles["title__title-h1"]}>{children}</h1>
  ) : (
    <p className={styles["title"]}>{children}</p>
  );
};

export default Title;

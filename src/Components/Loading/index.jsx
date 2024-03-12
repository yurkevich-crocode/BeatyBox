import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <div className={styles["loading__wrapper"]}>
        <div className={styles["loading__img-wrapper"]}>
          <img src="/loading.gif" alt="" />
        </div>
        <p className={styles["loading__text"]}>Загрузка...</p>
      </div>
    </div>
  );
};

export default Loading;

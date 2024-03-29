import styles from "./ServicesItem.module.scss";

const ServicesItem = ({ name, loading = false }) => {
  return loading ? (
    <a
      href="#"
      className={`${styles["services-item"]} ${styles["services-item--load"]}`}
    >
      <div className={styles["services-item__content-wrapper"]}>
        <p className={styles["services-item__name"]}>Service</p>
      </div>
    </a>
  ) : (
    <a href={`/${name}`} className={styles["services-item"]}>
      <div className={styles["services-item__content-wrapper"]}>
        <p className={styles["services-item__name"]}>{name}</p>
      </div>
    </a>
  );
};

export default ServicesItem;

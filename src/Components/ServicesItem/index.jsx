import styles from "./ServicesItem.module.scss";

const ServicesItem = () => {
  return (
    <div className={styles["services-item"]}>
      <div className={styles["services-item__img-wrapper"]}>
        <img src="./images/nails.jpg" alt="" />
      </div>
      <div className={styles["services-item__content-wrapper"]}>
        <p className={styles["services-item__name"]}>ServiceName</p>
      </div>
    </div>
  );
};

export default ServicesItem;

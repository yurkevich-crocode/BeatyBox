import styles from "./ServicesItem.module.scss";

const ServicesItem = ({ name, image }) => {
  return (
    <a href={`/${name}`} className={styles["services-item"]}>
      <div className={styles["services-item__img-wrapper"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["services-item__content-wrapper"]}>
        <p className={styles["services-item__name"]}>{name}</p>
      </div>
    </a>
  );
};

export default ServicesItem;

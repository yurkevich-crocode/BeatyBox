import styles from "./MobileToggle.module.scss";

const MobileToggle = ({ toggle, handleSetActive }) => {
  const variantsTog = [
    {
      name: "Услуги",
    },
    {
      name: "Детали",
    },
  ];

  const handleActiveToggle = (e) => {
    handleSetActive(e.target.textContent);
  };

  return (
    <div className={styles["mobile-toggle"]}>
      <div className={styles["mobile-toggle__wrapper"]}>
        <div className={styles["mobile-toggle__items"]}>
          {variantsTog.map((el) =>
            toggle === el.name ? (
              <span
                className={`${styles["mobile-toggle__item"]} ${styles["mobile-toggle__item--active"]}`}
                onClick={(e) => handleActiveToggle(e)}
              >
                {el.name}
              </span>
            ) : (
              <span
                className={styles["mobile-toggle__item"]}
                onClick={(e) => handleActiveToggle(e)}
              >
                {el.name}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileToggle;

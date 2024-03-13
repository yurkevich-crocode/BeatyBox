import { default as MapArea } from "../MapArea";
import styles from "./Shedule.module.scss";

const Shedule = ({ geodata, shedule }) => {
  return (
    <div className={styles["shedule"]}>
      <MapArea geoPos={geodata} />
      <div className={styles["shedule__wrapper"]}>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>О нас</p>
          <p className={styles["shedule__text"]}>{shedule.description}</p>
        </div>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>Контакты</p>
          <a
            href={`tel:${shedule.phone}`}
            className={styles["schedule__cellPhone"]}
          >
            {shedule.phone}
          </a>
        </div>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>График работы</p>
          <div className={styles["shedule__worktime-items"]}>
            {shedule.schedule.map((item) => (
              <span className={styles["shedule__worktime-item"]}>
                {item.day}: {item.worktime}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;

import { useEffect, useState } from "react";
import { default as MapArea } from "../MapArea";
import styles from "./Shedule.module.scss";

const week = [
  {
    id: 1,
    name: "Понедельник",
  },
  {
    id: 2,
    name: "Вторник",
  },
  {
    id: 3,
    name: "Среда",
  },
  {
    id: 4,
    name: "Четверг",
  },
  {
    id: 5,
    name: "Пятница",
  },
  {
    id: 6,
    name: "Суббота",
  },
  {
    id: 7,
    name: "Воскресенье",
  },
];

const Shedule = ({ shedule, geodata, toggle }) => {
  const [phoneArr, setPhoneArr] = useState([]);
  const [sheduleArr, setSheduleArr] = useState([]);

  useEffect(() => {
    shedule.companymetadatums.filter((el) => {
      el.type === "phones" ? setPhoneArr([...el.value]) : null;
      el.type === "schedule" ? setSheduleArr([...el.value]) : null;
    });
  }, [shedule]);

  console.log(sheduleArr);
  return shedule ? (
    <div
      className={
        toggle === "Детали"
          ? `${styles["shedule"]} ${styles["shedule--active"]}`
          : `${styles["shedule"]}`
      }
    >
      <MapArea geoPos={geodata} />
      <div className={styles["shedule__wrapper"]}>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>О нас</p>
          <p className={styles["shedule__text"]}>{shedule?.description}</p>
        </div>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>Контакты</p>
          {phoneArr.map((el) => (
            <a href={`tel:${el}`} className={styles["shedule__cellPhone"]}>
              <span className={styles["shedule__icon"]}>
                <img src="/icons/phone.svg" />
              </span>
              {el}
            </a>
          ))}
        </div>
        <div className={styles["shedule__row"]}>
          <p className={styles["shedule__title"]}>График работы</p>
          <div className={styles["shedule__worktime-items"]}>
            {sheduleArr.map((item, idx) => (
              <span className={styles["shedule__worktime-item"]}>
                {week[idx].name}
                {": "}
                {!item.isClosed
                  ? `${item.startTime.hours}:${item.startTime.minutes}0 - ${item.endTime.hours}:${item.endTime.minutes}0`
                  : "Выходной"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Shedule;

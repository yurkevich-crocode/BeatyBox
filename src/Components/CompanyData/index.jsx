import { useEffect, useState } from "react";
import MobileToggle from "../MobileToggle";
import styles from "./CompanyData.module.scss";
import ExampleWorks from "@/Components/ExampleWorksSlider";

const CompanyData = ({ company, toggle, handleSetActive }) => {
  const [images, setImages] = useState([]);
  const [counterItems, setCounter] = useState(10);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (company) {
      company.companymetadatums.filter((el) => {
        el.type === "images" ? setImages([...el.value]) : null;
      });
    }
  }, [company]);

  const handleCounter = (arr) => {
    if (counterItems == arr.length) {
      setCounter(10);
    } else {
      setCounter(arr.length);
    }
  };

  const handleShow = () => {
    setShowDesc((prev) => !prev);
  };

  return company ? (
    <div className={styles["company-data__info-wrapper"]}>
      <div className={styles["company-data__img-wrapper"]}>
        <img src={images[0]} alt="" />
      </div>
      <MobileToggle toggle={toggle} handleSetActive={handleSetActive} />
      {toggle === "Услуги" ? (
        <>
          <div className={styles["company-data__about"]}>
            <h1>{company.name}</h1>
            <span
              className={styles["company-data__address"]}
            >{`${company.address}`}</span>
            <span className={styles["company-data__address"]}>
              {/* Языки: {`${[...company?.languages]}`} */}
            </span>

            <p className={styles["company-data__verification"]}>
              {company.verificationStatus !== "notverif"
                ? "Верифицированный салон"
                : "Неверифицированный салон"}
            </p>
          </div>
          <div className={styles["company-data__service"]}>
            <h2>Список услуг</h2>
            <div className={styles["company-data__services-list"]}>
              {company.services.slice(0, counterItems).map((cat, idx) => (
                <div className={styles["company-data__tag"]} key={idx}>
                  <div className={styles["company-data__tag-main"]}>
                    <p className={styles["company-data__tag-name"]}>
                      {cat.name}
                    </p>
                    <span className={styles["company-data__tag-price"]}>
                      {cat.price} {cat.currency}
                    </span>
                  </div>
                  <span
                    className={
                      showDesc
                        ? `${styles["company-data__tag-description"]} ${styles["company-data__tag-desctiption--active"]}`
                        : `${styles["company-data__tag-description"]}`
                    }
                  >
                    {cat.description}
                  </span>
                  {cat.description !== "" ? (
                    <span onClick={() => handleShow()}>Показать описание</span>
                  ) : null}
                </div>
              ))}
            </div>
            <span
              className={styles["company-data__show-all"]}
              onClick={() => handleCounter(company.services)}
            >
              {counterItems > 10 ? "Скрыть все" : "Показать все"}
            </span>
          </div>
          <div className={styles["company-data__example-works"]}>
            <h2>Примеры работ</h2>
            <ExampleWorks items={images.slice(1, images.length)} />
          </div>
        </>
      ) : null}
    </div>
  ) : null;
};

export default CompanyData;

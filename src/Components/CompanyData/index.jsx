import { useEffect, useState } from "react";
import MobileToggle from "../MobileToggle";
import styles from "./CompanyData.module.scss";
import ExampleWorks from "@/Components/ExampleWorksSlider";
import CompanyTag from "../CompanyTag";

const CompanyData = ({ company, toggle, handleSetActive }) => {
  const [images, setImages] = useState([]);
  const [counterItems, setCounter] = useState(10);
  const [parentList, setParentList] = useState([]);

  Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true;
    }
    return false;
  };

  Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (!arr.contains(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  };

  useEffect(() => {
    const parentListArr = [];
    if (company) {
      company.companymetadatums.filter((el) => {
        el.type === "images" ? setImages([...el.value]) : null;
      });

      company.services.map((el) => {
        if (el.parent !== null) {
          parentListArr.push(el);
          setParentList(parentListArr.unique());
        }
      });
    }
  }, [company]);

  console.log(parentList);

  const handleCounter = (arr) => {
    if (counterItems == arr.length && arr.length > 10) {
      setCounter(10);
    } else {
      setCounter(arr.length);
    }
  };

  console.log(counterItems);

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
              {company.services.slice(0, counterItems).map((cat, idx) =>
                !cat.parent ? (
                  <div className={styles["company-data__tag"]} key={idx}>
                    <div className={styles["company-data__tag-main"]}>
                      <p className={styles["company-data__tag-name"]}>
                        {cat.name}
                      </p>
                      <span className={styles["company-data__tag-price"]}>
                        {cat.price} {cat.currency}
                      </span>
                    </div>

                    <CompanyTag desc={cat.description} />
                    {parentList.map((el) => {
                      if (el.parent.name === cat.name) {
                        return (
                          <span className={styles["company-data__tag-subtag"]}>
                            {el.name}{" "}
                            <span>
                              {el.price} {el.currency}
                            </span>
                          </span>
                        );
                      }
                    })}
                  </div>
                ) : null
              )}
            </div>
            <span
              className={styles["company-data__show-all"]}
              onClick={() => handleCounter(company.services)}
            >
              {company.services.length > 10
                ? counterItems > 10
                  ? "Скрыть все"
                  : "Показать все"
                : null}
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

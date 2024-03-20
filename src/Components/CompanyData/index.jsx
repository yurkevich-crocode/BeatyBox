import MobileToggle from "../MobileToggle";
import styles from "./CompanyData.module.scss";
import ExampleWorks from "@/Components/ExampleWorksSlider";

const CompanyData = ({ company, toggle, handleSetActive }) => {
  return company ? (
    <div className={styles["company-data__info-wrapper"]}>
      <div className={styles["company-data__img-wrapper"]}>
        <img src={company.exampleWorks[0]} alt="" />
      </div>
      <MobileToggle toggle={toggle} handleSetActive={handleSetActive} />
      {toggle === "Услуги" ? (
        <>
          <div className={styles["company-data__about"]}>
            <h1>{company.companyName}</h1>
            <span
              className={styles["company-data__address"]}
            >{`${company.street}`}</span>
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
              {company.tags?.map((tag, idx) => (
                <div className={styles["company-data__tag"]} key={idx}>
                  <p className={styles["company-data__tag-name"]}>{tag.name}</p>
                  <span className={styles["company-data__tag-price"]}>
                    {tag.price?.value} {tag.price?.currency}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["company-data__example-works"]}>
            <h2>Примеры работ</h2>
            <ExampleWorks items={company?.exampleWorks} />
          </div>
        </>
      ) : null}
    </div>
  ) : null;
};

export default CompanyData;

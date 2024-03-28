import { useState } from "react";
import styles from "./CompanyTag.module.scss";

const CompanyTag = ({ desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShow = () => {
    setShowDesc((prev) => !prev);
  };
  return (
    <>
      <span
        className={
          showDesc
            ? `${styles["company-tag__description"]} ${styles["company-tag__desctiption--active"]}`
            : `${styles["company-tag__description"]}`
        }
      >
        {desc}
      </span>
      {desc.length > 120 ? (
        <span
          className={styles["company-tag__show"]}
          onClick={() => handleShow()}
        >
          Показать описание
        </span>
      ) : null}
    </>
  );
};

export default CompanyTag;

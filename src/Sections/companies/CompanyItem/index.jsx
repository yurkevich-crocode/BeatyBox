import { usePathname } from "next/navigation";

import styles from "./CompanyItem.module.scss";

const CompanyItem = ({ data, skeleton, url }) => {
  return skeleton ? (
    <div
      className={`${styles["company-item"]} ${styles["company-item__skeleton"]}`}
    >
      <div className={styles["company-item__img-wrapper"]}>
        <div className={styles["company-item__img-skeleton"]} />
      </div>
      <div className={styles["company-item__info-wrapper"]}>
        <div className={styles["company-item__main-info"]}>
          <p className={styles["company-item__name-skeleton"]}>&nbsp;</p>
          <p className={styles["company-item__address-skeleton"]}>&nbsp;</p>
        </div>
        <div className={styles["company-item__tags-list"]}>
          <div className={styles["company-item__tag-skeleton"]}>
            <p className={styles["company-item__tag-text"]}>&nbsp;</p>
            <span className={styles["company-item__price"]}>&nbsp;</span>
          </div>
          <div className={styles["company-item__tag-skeleton"]}>
            <p className={styles["company-item__tag-text"]}>&nbsp;</p>
            <span className={styles["company-item__price"]}>&nbsp;</span>
          </div>
          <div className={styles["company-item__tag-skeleton"]}>
            <p className={styles["company-item__tag-text"]}>&nbsp;</p>
            <span className={styles["company-item__price"]}>&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles["company-item"]}>
      <a href={`/${url[2]}/${data?.companyName}?id=${data.id}`}>
        <div className={styles["company-item__img-wrapper"]}>
          <img src={data?.profileImg} alt="" />
        </div>
      </a>

      <div className={styles["company-item__info-wrapper"]}>
        <div className={styles["company-item__main-info"]}>
          <a
            href={`/${url[2]}/${data?.companyName}?id=${data.id}`}
            className={styles["company-item__name"]}
          >
            {data?.companyName}
          </a>
          <p className={styles["company-item__address"]}>
            {data?.city}, {data?.street}
          </p>
        </div>
        <div className={styles["company-item__tags-list"]}>
          {data?.tags?.slice(0, 3).map((el, idx) => (
            <div className={styles["company-item__tag"]} key={idx}>
              <p className={styles["company-item__tag-text"]}>
                {el?.serviceName}
              </p>
              <span className={styles["company-item__price"]}>
                {el?.price} ₽
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;

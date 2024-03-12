"use client";

import Container from "@/Components/Container";
import styles from "./Company.module.scss";
import { useEffect, useState } from "react";

export const getCompanyData = async (id) => {
  const result = await fetch(`/api/getCompany/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const response = await result.json();
  if (!response.error) {
    return response;
  }
};

const Company = () => {
  const [company, setCompanyData] = useState(null);
  const url = window.location.href.split("/").filter((part) => part !== "");

  useEffect(() => {
    const id = url[3].split("")[url[3].split("").length - 1];

    getCompanyData(id).then(({ data }) => {
      if (data) {
        setCompanyData(data);
      }
    });
  }, []);

  return company ? (
    <section className={styles["company"]}>
      <Container>
        <div className={styles["company__wrapper"]}>
          <div className={styles["company__info-wrapper"]}>
            <div className={styles["company__img-wrapper"]}>
              <img src={company.profileImg} alt="" />
            </div>
            <div className={styles["company__about"]}>
              <h1>{company.companyName}</h1>
              <span
                className={styles["company__address"]}
              >{`${company.city}, ${company.street}`}</span>

              <p className={styles["company__verification"]}>
                {company.verificationStatus !== "notverif"
                  ? "Верифицированный салон"
                  : "Неверифицированный салон"}
              </p>
            </div>
            <div className={styles["company__services"]}>
              <h2>Список услуг</h2>
              <div className={styles["company__services-list"]}>
                {company?.tags.map((tag) => (
                  <div>
                    {tag.serviceName} {tag.price} ₽
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles["company__schedule"]}></div>
        </div>
      </Container>
    </section>
  ) : null;
};

export default Company;

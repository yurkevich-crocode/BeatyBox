"use client";

import Container from "@/Components/Container";
import styles from "./Company.module.scss";
import { useEffect, useState } from "react";
import Shedule from "@/Components/Shedule";
import CompanyData from "@/Components/CompanyData";

export const getCompanyData = async (companyName) => {
  const result = await fetch(`/api/getCompany`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ companyName }),
  });

  const response = await result.json();
  if (!response.error) {
    return response;
  }
};

const Company = () => {
  const [company, setCompanyData] = useState(null);

  useEffect(() => {
    const url = window?.location.href.split("/").filter((part) => part !== "");

    getCompanyData(url[3]).then(({ data }) => {
      if (data) {
        setCompanyData(data);
      }
    });
  }, []);

  return company ? (
    <section className={styles["company"]}>
      <Container>
        <div className={styles["company__wrapper"]}>
          <CompanyData company={company[0]} />
          <Shedule geodata={company[0].geodata} shedule={company[0]} />
        </div>
      </Container>
    </section>
  ) : null;
};

export default Company;

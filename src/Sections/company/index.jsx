"use client";

import Container from "@/Components/Container";
import styles from "./Company.module.scss";
import { useEffect, useState } from "react";
import Shedule from "@/Components/Shedule";
import CompanyData from "@/Components/CompanyData";
import Loading from "@/Components/Loading";
import { commonSearch } from "../companies/CompanyList";

export const getCompanyData = async (id) => {
  const result = await fetch(`/api/getCompany`, {
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
  const [isLoad, setLoad] = useState(true);
  const [toggleVariant, setToggleVariant] = useState("Услуги");

  useEffect(() => {
    const url = window?.location.href.split("/").filter((part) => part !== "");

    getCompanyData(url[3]).then(({ data }) => {
      if (data) {
        setCompanyData(data);
        setLoad(false);
      }
    });
  }, []);

  const handleSetActive = (value) => {
    setToggleVariant(value);
  };

  console.log(company);
  return !isLoad && company ? (
    <section className={styles["company"]}>
      <Container>
        <div className={styles["company__wrapper"]}>
          <CompanyData
            company={company}
            toggle={toggleVariant}
            handleSetActive={handleSetActive}
          />
          <Shedule
            shedule={company}
            geodata={company.geodata}
            toggle={toggleVariant}
          />
        </div>
      </Container>
    </section>
  ) : (
    <Loading />
  );
};

export default Company;

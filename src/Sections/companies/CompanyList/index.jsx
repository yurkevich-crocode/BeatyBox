"use client";

import Container from "@/Components/Container";
import styles from "./CompanyList.module.scss";
import CompanyItem from "../CompanyItem";
import { useEffect, useState } from "react";

export const commonSearch = async (serviceName) => {
  const result = await fetch(`/api/commonSearch/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ serviceName }),
  });

  const response = await result.json();
  if (!response.error) {
    return response;
  }
};

const CompanyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const url = window.location.href.split("/").filter((part) => part !== "");

    const lastPart = url[url.length - 1];

    setCategory(url);

    commonSearch(lastPart).then((param) => {
      if (param && param.data) {
        setItems([...param.data]);
        setLoading(false);
      } else {
        setItems([]);
      }
    });
  }, []);

  return (
    <section className={styles["company-list"]}>
      <Container>
        <div className={styles["company-list__wrapper"]}>
          <div className={styles["company-list__items"]}>
            {items && !loading && items.length > 0 ? (
              items.map((el) => (
                <CompanyItem key={el.id} data={el} url={category} />
              ))
            ) : items && !loading ? (
              <p>По вашему запросу ничего не найдено :(</p>
            ) : (
              <>
                <CompanyItem skeleton={loading} />
                <CompanyItem skeleton={loading} />
                <CompanyItem skeleton={loading} />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyList;

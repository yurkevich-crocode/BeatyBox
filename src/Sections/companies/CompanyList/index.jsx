"use client";

import Container from "@/Components/Container";
import styles from "./CompanyList.module.scss";
import CompanyItem from "../CompanyItem";
import { useEffect, useState } from "react";
import Loading from "@/Components/Loading";

export const commonSearch = async () => {
  const result = await fetch("/api/commonSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await result.json();
  if (!response.error) {
    return response;
  }
};

const CompanyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    commonSearch().then(({ data }) => {
      if (data) {
        setItems([...data]);
        setLoading(false);
      }
    });
  }, []);

  return (
    <section className={styles["company-list"]}>
      <Container>
        <div className={styles["company-list__wrapper"]}>
          <div className={styles["company-list__items"]}>
            {items && !loading ? (
              items.map((el) => <CompanyItem key={el.id} data={el} />)
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

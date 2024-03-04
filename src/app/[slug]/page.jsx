import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import CompanyList from "@/Sections/companies/CompanyList";

export default function Companies({ params }) {
  return (
    <>
      <Header land={false} />
      <main>
        <CompanyList />
      </main>
      <Footer />
    </>
  );
}

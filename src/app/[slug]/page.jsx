import Breadcrumps from "@/Sections/Breadcrumps";
import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import CompanyList from "@/Sections/companies/CompanyList";

export default function Companies({ params }) {
  return (
    <>
      <Header />
      <main>
        {/* <Breadcrumps /> */}
        <CompanyList />
      </main>
      <Footer />
    </>
  );
}

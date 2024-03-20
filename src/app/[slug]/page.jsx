import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import MobileBar from "@/Sections/MobileBar";
import CompanyList from "@/Sections/companies/CompanyList";
export default function Companies({ params }) {
  return (
    <>
      <Header land={false} />
      <main>
        <CompanyList />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

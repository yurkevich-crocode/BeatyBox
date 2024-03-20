import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import Company from "@/Sections/company";
import MobileBar from "@/Sections/MobileBar";

export default function Companies({ params }) {
  return (
    <>
      <Header land={false} />
      <main>
        <Company />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

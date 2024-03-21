import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import MobileBar from "@/Sections/MobileBar";
import Auth from "@/Sections/lk/Auth";

export default function Home() {
  return (
    <>
      <Header land={false} />
      <main>
        <Auth variant={"login"} />
      </main>
      <MobileBar />
      <Footer />
    </>
  );
}

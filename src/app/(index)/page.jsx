import Blog from "@/Sections/landing/Blog";
import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import Hero from "@/Sections/landing/Hero/Hero";
import Services from "@/Sections/landing/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

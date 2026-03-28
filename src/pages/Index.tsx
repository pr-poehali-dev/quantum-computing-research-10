import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import Screenings from "@/components/Screenings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Gallery />
      <Screenings />
      <Footer />
    </main>
  );
};

export default Index;
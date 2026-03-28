import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Scenes from "@/components/Scenes";
import Gallery from "@/components/Gallery";
import Screenings from "@/components/Screenings";
import Press from "@/components/Press";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Featured />
      <Promo />
      <Scenes />
      <Gallery />
      <Screenings />
      <Press />
      <Footer />
    </main>
  );
};

export default Index;
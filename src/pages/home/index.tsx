import Header from "@/components/header/Header";
import HeroSection from "../../components/HeroSection";
import ProductSection from "../../components/ProductSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <main className="flex">
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroSection />
          <ProductSection />

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;

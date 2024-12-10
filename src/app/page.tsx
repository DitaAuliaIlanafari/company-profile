import HeroSection from "./components/Home/HeroSection";
import OverviewCompany from "./components/Home/OverviewCompany";
import { Product } from "./components/Home/Product";
import Testimonials from "./components/Home/Testimonials";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <HeroSection />
      <OverviewCompany />
      <Product />
      <Testimonials />
    </main>
  );
}

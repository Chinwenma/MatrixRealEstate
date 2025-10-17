import FooterBanner from "./components/footer/FooterBanner";
import PropertyCategories from "./components/home/Categories";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import WhyChooseUs from "./components/home/WhyChooseUs";
import FeaturedProperties from "./components/featured/FeaturedPrioperty";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProperties/>
      <PropertyCategories/>
      <WhyChooseUs/>
      <HowItWorks/>
      <FooterBanner/>
    </div>
  );
}

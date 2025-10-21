import FooterBanner from "./components/footer/FooterBanner";
import PropertyCategories from "./components/home/Categories";
import HowItWorks from "./components/home/HowItWorks";
import WhyChooseUs from "./components/home/WhyChooseUs";
import FeaturedProperties from "./components/featured/FeaturedPrioperty";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProperties limit={3}/>
      <PropertyCategories/>
      <WhyChooseUs/>
      <HowItWorks/>
      <FooterBanner/>
    </div>
  );
}

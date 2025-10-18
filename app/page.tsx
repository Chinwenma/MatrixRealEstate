import FooterBanner from "@/app/components/footer/FooterBanner";
import PropertyCategories from "@/app/components/home/Categories";
import HowItWorks from "@/app/components/home/HowItWorks";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import FeaturedProperties from "@/app/components/featured/FeaturedPrioperty";
import Hero from "@/app/components/home/Hero";

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

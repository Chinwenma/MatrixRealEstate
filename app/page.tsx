import FooterBanner from "./components/footer/FooterBanner";
import HowItWorks from "./components/home/HowItWorks";
import WhyChooseUs from "./components/home/WhyChooseUs";
import FeaturedProperties from "./components/featured/FeaturedPrioperty";
import Hero from "./components/home/Hero";
import Banner from "./components/banner/BannerMain";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProperties limit={3} />
      <WhyChooseUs />
      <Banner />
      <HowItWorks />
      <FooterBanner />
    </div>
  );
}

import Banner from "app/components/banner/BannerMain";
import FeaturedProperties from "app/components/featured/FeaturedPrioperty";
import FooterBanner from "app/components/footer/FooterBanner";
import Hero from "app/components/home/Hero";
import HowItWorks from "app/components/home/HowItWorks";
import WhyChooseUs from "app/components/home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProperties limit={3} />
      <WhyChooseUs />
      <Banner />
      <HowItWorks/>
      <FooterBanner />
    </div>
  );
}

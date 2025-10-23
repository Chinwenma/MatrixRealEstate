import PageBanner from "app/components/banner/PageBanner";
import Team from "./Teams";
import MissionVision from "./MissionVision";
import PropertyCategories from "./Categories";
import About from "./About";

export default function Aboutpage() {
  return (
    <main>
      <PageBanner
      title="About us"
      backgroundImage="/assets/house1.jpg"
      subtitle="learn more about what we do here at Matrix Real Estate"
      />
      <About/>
      <MissionVision/>
      <PropertyCategories/>
      <Team/>
    </main>
  )
}

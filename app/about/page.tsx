import PageBanner from "app/components/banner/PageBanner";
import Team from "./Teams";

export default function Aboutpage() {
  return (
    <div>
      <PageBanner
      title="About us"
      backgroundImage="/assets/house1.jpg"
      subtitle="learn more about what we do here at Matrix Real Estate"
      />
      <Team/>
    </div>
  )
}

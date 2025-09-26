import AboutSection from "@/components/AboutSection";
import DesignTeamSection from "@/components/DesignTeamSection";
import Header from "@/components/Header";
import LocationPage from "@/components/LocationPage";

import WhyDesignHive from "@/components/WhyDesignHive";


export default function Home() {
  return (
    <div className="">
      <Header />
      <AboutSection />
      <WhyDesignHive />
      <LocationPage />
      <DesignTeamSection />
    </div>
  );
}

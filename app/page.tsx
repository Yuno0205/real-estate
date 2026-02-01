import { ActionForm } from "../components/sections/ActionForm";
import { FAQ } from "../components/sections/FAQ";
import { Features } from "../components/sections/Features";
import GreenArchitecture from "../components/sections/GreenArchitecture";
import HeroSection from "../components/sections/HeroSection";
import LivingSpace from "../components/sections/LivingSpace";
import { Location } from "../components/sections/Location";
import News from "../components/sections/News";
import { ParkImage } from "../components/sections/ParkImage";
import { PremiumSpace } from "../components/sections/PremiumSpace";
import ProjectOverview from "../components/sections/ProjectOverview";
import { Service } from "../components/sections/Service";
import Showcase from "../components/sections/Showcase";
import { Utility } from "../components/sections/Utility";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GreenArchitecture />
      <ProjectOverview />
      <LivingSpace />
      <Service />
      <Features />
      <Location />
      <Utility />
      <ParkImage />
      <PremiumSpace />
      <FAQ />
      <Showcase />
      <News />
      <ActionForm />
    </>
  );
}

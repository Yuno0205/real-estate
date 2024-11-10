import Banner from "./components/Banner";
import BlueZone from "./components/BlueZone";
import { Club } from "./components/Club";
import { Extention } from "./components/Extention";
import { Feature } from "./components/Feature";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Infomation } from "./components/Infomation";
import { Location } from "./components/Location";
import News from "./components/News";
import { Offer } from "./components/Offer";
import Overall from "./components/Overall";
import { QandA } from "./components/Q&A";
import { Resort } from "./components/Resort";
import SaiGonRiver from "./components/SaiGonRiver";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BlueZone />
      <Overall />
      <SaiGonRiver />
      <Offer />
      <Feature />
      <Location />
      <Extention />
      <Club />
      <Resort />
      <QandA />
      <Showcase />
      <News />
      {/* <Spa />
      <Testimonial />
      <Exp /> */}
      <Infomation />
      <Footer />
    </>
  );
}

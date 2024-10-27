import Banner from "./components/Banner";
import BlueZone from "./components/BlueZone";
import { Club } from "./components/Club";
import { Exp } from "./components/Exp";
import { Extention } from "./components/Extention";
import { Feature } from "./components/Feature";
import Header from "./components/Header";
import { Location } from "./components/Location";
import { Offer } from "./components/Offer";
import Overall from "./components/Overall";
import { Resort } from "./components/Resort";
import SaiGonRiver from "./components/SaiGonRiver";
import { Spa } from "./components/Spa";
import { Testimonial } from "./components/Testimonial";

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
      <Spa />
      <Testimonial />
      <Exp />
    </>
  );
}

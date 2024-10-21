import Banner from "./components/Banner";
import BlueZone from "./components/BlueZone";
import { Feature } from "./components/Feature";
import Header from "./components/Header";
import { Offer } from "./components/Offer";
import Overall from "./components/Overall";
import SaiGonRiver from "./components/SaiGonRiver";

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
    </>
  );
}

import Image from "next/image";
import img from "@/public/static/images/7-TANG-BLUE-FOREST-1024x1024.jpg";
import { Aguafina_Script } from "next/font/google";
import clsx from "clsx";

const aguafina = Aguafina_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SaiGonRiver() {
  return (
    <div className="w-full h-full pt-[167px] pb-[200px] flex">
      <div className="w-2/5 text-center">
        <div className="w-full">
          <div className="h-[1px] w-1/12 align-middle bg-[#bcbcbc] inline-block mb-4"></div>
          <span className={clsx("text-4xl text-[#185822]", aguafina.className)}>
            Ecovillage Saigon River
          </span>
        </div>
      </div>
      <div className="w-1/2 flex items-center">
        <Image src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
}

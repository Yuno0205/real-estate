import Image from "next/image";
import logo from "@/public/static/images/logo-ecovillage-saigon-river.png";

export const Footer = () => {
  return (
    <footer className="w-full py-9">
      <div className="max-w-[1140px] mx-auto flex">
        <div className="w-1/4 px-4">
          <Image src={logo} alt="logo" className="object-cover" />
        </div>
        <div className="w-3/4 text-end">
          <span className="">Sở hữu bởi Cty Saigon Luxury.</span>
        </div>
      </div>
    </footer>
  );
};

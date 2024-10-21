import Image from "next/image";
import img from "@/public/static/images/7-TANG-BLUE-FOREST-1024x1024.jpg";
import {
  Aguafina_Script,
  Noto_Serif_Toto,
  Prata,
  Oswald,
} from "next/font/google";
import clsx from "clsx";

const aguafina = Aguafina_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const noto = Noto_Serif_Toto({
  subsets: ["latin"],
  weight: ["400"],
});

const prata = Prata({
  subsets: ["vietnamese", "latin"],
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SaiGonRiver() {
  return (
    <div className="w-full h-full pt-[167px] pb-[200px] flex px-3">
      <div className="w-2/5 text-center">
        <div className="w-full">
          <div className="h-[1px] w-1/12 align-middle bg-[#bcbcbc] inline-block mb-4"></div>
          <span className={clsx("text-4xl text-[#185822]", aguafina.className)}>
            Ecovillage Saigon River
          </span>
        </div>
        <div className={clsx("w-full text-justify py-5", noto.className)}>
          <div className="w-11/12">
            <p className="mb-6">
              EcoVillage Sai Gon River sở hữu 3 mặt giáp sông đắt giá, quy mô
              55ha nhưng mật độ xây dựng chỉ 15%. Đây là Dự án biểu tượng đầu
              tiên của Nhà sáng lập Ecopark tại miền Nam
            </p>
            <p className="mb-6">
              Tại EcoVillage Saigon với mật độ cây xanh lên đến 170 cây/người,
              bao bọc bởi 48.5ha cây xanh và mặt nước. Tổng số lượng thương phẩm
              chỉ 668 sản phẩm (Nhà phố & Biệt thự) cực kỳ giới hạn, và 1 Khu
              Resorts 6 sao mang thương hiệu lẫy lừng thế giới Kempinskin đậm
              chất nghĩ dưỡng
            </p>
          </div>
        </div>

        <div className="w-11/12 mt-5">
          <div className="text-justify font-medium leading-6 text-[#232323] border-solid border-l-4 border-[#FF7A56] py-1 pl-8">
            <p className={clsx("mb-5 text-justify", prata.className)}>
              Nơi vùng đất Blue Zones thứ 6 trên thế giới được đánh thức, được
              bao quanh bởi dòng sông Sài Gòn thơ mộng
            </p>
            <footer
              className={clsx(
                "font-semibold uppercase leading-5 tracking-wide text-[#FF7A56]",
                oswald.className
              )}
            >
              Sản phẩm của nhà sáng lập Ecopark
            </footer>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center p-4">
        <Image src={img} alt="img" className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-around">
        {/* Items */}
        <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
          <div className="mb-2.5">
            <span className="text-3xl text-[#2E562A] font-semibold">30</span>
            <span className="text-xl text-[#B57C46] ml-2 translate-y-60 float-top">
              %
            </span>
          </div>
          <div className="text-[#939393]">
            <span>CÂY XANH & MẶT NƯỚC</span>
          </div>
        </div>
        <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
          <div className="mb-2.5">
            <span className="text-3xl text-[#2E562A] font-semibold">15</span>
            <span className="text-xl text-[#B57C46] ml-2 translate-y-60 float-top">
              %
            </span>
          </div>
          <div className="text-[#939393]">
            <span>MẬT ĐỘ XÂY DỰNG</span>
          </div>
        </div>
        <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
          <div className="mb-2.5">
            <span className="text-3xl text-[#2E562A] font-semibold">4</span>
            <span className="text-xl text-[#B57C46] ml-2 translate-y-60 float-top">
              Ha
            </span>
          </div>
          <div className="text-[#939393]">
            <span>DIỆN TÍCH CÔNG VIÊN</span>
          </div>
        </div>
        <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
          <div className="mb-2.5">
            <span className="text-3xl text-[#2E562A] font-semibold">200</span>
          </div>
          <div className="text-[#939393]">
            <span>LOÀI HOA</span>
          </div>
        </div>
        <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
          <div className="mb-2.5">
            <span className="text-3xl text-[#2E562A] font-semibold">170</span>
          </div>
          <div className="text-[#939393]">
            <span>CÂY/ NGƯỜI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

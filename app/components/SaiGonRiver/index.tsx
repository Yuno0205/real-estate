import img from "@/public/static/images/villa.jpg";
import clsx from "clsx";
import { Inter, Montserrat, Oswald, Prata } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});

const prata = Prata({
  subsets: ["vietnamese", "latin"],
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

const mont = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export default function SaiGonRiver() {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[1140px] mx-auto pt-[167px] pb-[200px] md:pt-[100px] md:pb-[100px] xs:pt-[60px] xs:pb-[60px] flex px-3 md:flex-col">
        <div className="w-1/3 md:w-full">
          <div className="w-full relative md:text-center">
            <div className="h-[1px] w-1/12 align-middle bg-[#bcbcbc] inline-block mb-4 absolute left-[-50px] top-4 md:hidden"></div>
            <span
              className={clsx(
                "text-3xl font-bold text-[#185822]",
                mont.className
              )}
            >
              Elite Life
              <br /> Chuẩn cho cuộc sống ưu tú
            </span>
          </div>
          <div className={clsx("w-full text-justify py-5", inter.className)}>
            <div className="w-11/12 md:w-full">
              <p className={clsx("mb-6 leading-7")}>
                <span className="text-[#008000] font-semibold">
                  Elite Life dự án nhà phố compound
                </span>{" "}
                được ví von giống như một ốc đảo xanh thu nhỏ đang tỏa sáng sát
                vách Khu đô thị Phú Mỹ Hưng, với kiến trúc xanh những tác phẩm
                nhà phố - biệt thự hiện đại kết hợp cùng các tiện ích nội khu đa
                dạng và đẳng cấp.
              </p>
              <p className="mb-6 leading-7">
                Tại Elite Life với mật độ không gian xanh, tiện ích và giao
                thông lên đến &lt; 26000 m2. Tổng số lượng thương phẩm chỉ 310
                sản phẩm (Nhà phố, Biệt thự và shophouse) cực kỳ giới hạn, và
                độc nhất tại khu công nghiệp Long Hậu.
              </p>
            </div>
          </div>

          <div className="w-11/12 mt-5 md:w-full">
            <div className="text-justify font-medium leading-6 text-[#232323] border-solid border-l-4 border-[#FF7A56] py-1 pl-8">
              <p
                className={clsx("mb-5 text-justify leading-6", prata.className)}
              >
                Elite Life sẽ là nơi kiến tạo nên cộng đồng cư dân có cùng khao
                khát về không gian sống sang trọng khác biệt, hình thành phong
                cách sống ưu tú đúng nghĩa.
              </p>
              <footer
                className={clsx(
                  "font-semibold uppercase leading-5 tracking-wide text-[#FF7A56]",
                  oswald.className
                )}
              >
                Sản phẩm của nhà sáng lập Tân Thái Thịnh
              </footer>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center p-4 md:w-full">
          <Image
            src={img}
            alt="img"
            className="rounded-lg object-cover h-4/5"
          />
        </div>
        <div className="flex flex-1 flex-col justify-around md:text-center">
          {/* Items */}
          <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
            <div className="mb-2.5">
              <span className="text-3xl text-[#2E562A] font-semibold">49</span>
              <span className="text-xl text-[#B57C46] ml-2 translate-y-60 float-top">
                %
              </span>
            </div>
            <div className="text-[#939393] uppercase">
              <span>Đất cho công cộng, cây xanh và giao thông</span>
            </div>
          </div>
          <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
            <div className="mb-2.5">
              <span className="text-3xl text-[#2E562A] font-semibold">51</span>
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
              <span className="text-3xl text-[#2E562A] font-semibold">
                6000
                <sup className="text-xl text-[#B57C46] translate-y-60 float-top">
                  m2
                </sup>
              </span>
            </div>
            <div className="text-[#939393] uppercase">
              <span>DIỆN TÍCH CÔNG VIÊN bốn mùa bên sông</span>
            </div>
          </div>
          <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
            <div className="mb-2.5">
              <span className="text-3xl text-[#2E562A] font-semibold">
                4 Mùa
              </span>
            </div>
            <div className="text-[#939393] uppercase">
              <span>Trên một công viên bên sông</span>
            </div>
          </div>
          <div className="flex flex-col pl-4 py-4 border-b border-[#939393]">
            <div className="mb-2.5">
              <span className="text-3xl text-[#2E562A] font-semibold">
                16 m
              </span>
            </div>
            <div className="text-[#939393] uppercase">
              <span>Đường với vỉa hàng tràn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

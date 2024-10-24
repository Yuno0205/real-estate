import clsx from "clsx";
import { Arsenal } from "next/font/google";
import Image from "next/image";
import layer8 from "@/public/static/images/Layer-8.png";
import layer11 from "@/public/static/images/Layer-11.png";
import layer10 from "@/public/static/images/Layer-10.png";
import layer9 from "@/public/static/images/Layer-9.png";
import layer14 from "@/public/static/images/Layer-14.png";
import layer13 from "@/public/static/images/Layer-13.png";
import layer15 from "@/public/static/images/Layer-15.png";
import layer12 from "@/public/static/images/Layer-12.png";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const Spa = () => {
  return (
    <>
      <section className="w-full h-full bg-[url('/static/images/ASV_ECO-VILLAGE_OSEN-PUBLIC.png')] bg-cover bg-no-repeat">
        <div className="max-w-[1140px] mx-auto h-full min-h-[861px] items-end flex">
          <div className="flex flex-col mb-10">
            <h6
              className={clsx(
                "text-[#223C5D] font-semibold pb-3 text-center text-2xl",
                arsenal.className
              )}
            >
              CÁC DÒNG KHOÁNG TẠI ĐÂY ĐƯỢC CHIẾT XUẤT PHÙ HỢP VỚI THỂ TRẠNG TỪNG
              NHÓM CƯ DÂN
            </h6>
            <div className="flex">
              <div className="w-1/3 bg-[#D4E6ED96] m-2.5 p-4 flex flex-col gap-3 rounded-xl">
                <span
                  className={clsx(
                    "text-[#375664] font-semibold",
                    arsenal.className
                  )}
                >
                  Dòng suối khoáng carbonat
                </span>
                <span
                  className={clsx(
                    "text-[#192C45] leading-7",
                    arsenal.className
                  )}
                >
                  giàu natri carbonnat và bicarbonat có tác dụng hỗ trợ làm đẹp
                  da, cải thiện da; phục hồi mệt mỏi sau khi bị chấn thương,
                  chống viêm, các bệnh ngoài da, dị ứng; giảm chứng mất ngủ,
                  tăng huyết áp ở người già.
                </span>
              </div>
              <div className="w-1/3 bg-[#D4E6ED96] m-2.5 p-4 flex flex-col gap-3 rounded-xl">
                <span
                  className={clsx(
                    "text-[#375664] font-semibold",
                    arsenal.className
                  )}
                >
                  Dòng suối khoáng lưu huỳnh
                </span>
                <span
                  className={clsx(
                    "text-[#192C45] leading-7",
                    arsenal.className
                  )}
                >
                  giàu lưu huỳnh và sunfat có tác dụng trong điều trị bệnh gout,
                  đau thắt lưng, đau dây thần kinh, đái tháo đường (ion lưu
                  huỳnh thúc đẩy sản xuất insulin).
                </span>
              </div>
              <div className="w-1/3 bg-[#D4E6ED96] m-2.5 p-4 flex flex-col gap-3 rounded-xl">
                <span
                  className={clsx(
                    "text-[#375664] font-semibold",
                    arsenal.className
                  )}
                >
                  Dòng suối khoáng clorua
                </span>
                <span
                  className={clsx(
                    "text-[#192C45] leading-7",
                    arsenal.className
                  )}
                >
                  giàu clorua và sắt có tác dụng cải thiện lưu thông máu, xơ
                  cứng mạch máu, huyết áp...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <div className="my-14 text-center flex flex-col">
          <span
            className={clsx(
              arsenal.className,
              "text-2xl font-semibold text-[#1C3549] text-center"
            )}
          >
            KẾT HỢP CÙNG VỚI TỔ HỢP SAUNA CHỦ ĐỀ & TỔ HỢP BEAUTY SPA, AQUA SPA
          </span>
          <span className="text-2xl text-[#2E72A1] font-medium">
            Tất cả tạo nên một liệu trình trị liệu hoàn hảo dành cho cư dân
          </span>
        </div>
        <div className="max-w-[1140px] mx-auto flex">
          <div className="w-1/2 px-4 flex gap-2">
            <div className="w-1/2">
              <Image
                alt=""
                src={layer14}
                className="py-1 object-cover rounded-xl"
              />
              <Image
                alt=""
                src={layer12}
                className="py-1 object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2">
              <Image
                alt=""
                src={layer15}
                className="py-1 object-cover rounded-xl"
              />
              <Image
                alt=""
                src={layer13}
                className="py-1 object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-1/2 px-4 flex gap-2">
            <div className="w-1/2">
              <Image
                alt=""
                src={layer8}
                className="py-1 object-cover rounded-xl"
              />
              <Image
                alt=""
                src={layer9}
                className="py-1 object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2">
              <Image
                alt=""
                src={layer10}
                className="py-1 object-cover rounded-xl"
              />
              <Image
                alt=""
                src={layer11}
                className="py-1 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

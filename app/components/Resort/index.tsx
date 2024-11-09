import luxury from "@/public/static/images/luxury.jpg";
import { Arsenal, Pinyon_Script } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const arsenal = Arsenal({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});
const pinyon = Pinyon_Script({
  subsets: ["vietnamese", "latin", "latin-ext"],
  weight: ["400"],
});
export const Resort = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <section
        style={{ backgroundSize: "13% auto" }}
        className="w-full  h-[300px] bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat"
      >
        <div className="max-w-[1140px] mx-auto flex mt-auto h-full items-end">
          <div className="flex flex-col w-full">
            <h2>
              <span
                className={clsx(
                  arsenal.className,
                  "text-[#396198] text-5xl font-bold uppercase"
                )}
              >
                Mỗi căn nhà
              </span>
              <span
                className={clsx(pinyon.className, "text-[#346F7B] text-5xl")}
              >
                {" "}
                là một không gian ưu tú
              </span>
            </h2>
            <span
              className={clsx(
                arsenal.className,
                "text-[#396198] text-5xl font-semibold uppercase text-end"
              )}
            >
              Của riêng bạn
            </span>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundSize: "12% auto" }}
        className="w-full h-full bg-[url('/static/images/leaft_left.png')] bg-left-bottom bg-no-repeat my-[104px]"
      >
        <div className="max-w-[1140px] mx-auto flex">
          {/* <div className="w-1/2 p-6 flex flex-col items-center justify-center gap-3">
            <h5 className="flex flex-col justify-center items-center text-center gap-3">
              <span
                className={clsx(arsenal.className, "text-xl text-[#1E5675]")}
              >
                10 HỒ KHOÁNG NÓNG LẠNH
              </span>
              <span
                className={clsx(
                  arsenal.className,
                  "text-2xl text-[#345481] font-semibold"
                )}
              >
                CHUYÊN ĐỀ PHỤC HỒI, TRỊ LIỆU, CHĂM SÓC SẮC ĐẸP
              </span>
            </h5>
            <p
              className={clsx(
                arsenal.className,
                "font-semibold text-[#2D6C7B] text-justify"
              )}
            >
              Để hiệu quả trị liệu khoáng nóng tối ưu, Chủ Đầu Tư dự án đã đầu
              tư các hồ khoáng nóng theo từng mức nhiệt; bao gồm: suối khoáng
              nóng (37-42 độ C) làm mở lỗ chân lông, thải các độc tố ra ngoài
              qua da; suối khoáng lạnh duy trì mức 16 độ C giúp se khít lỗ chân
              lông, giữ lại các khoáng chất đã thẩm thấu qua da.
            </p>
          </div> */}
          <div className="w-full px-4">
            <Image alt="luxury" src={luxury} />
          </div>
        </div>
      </section>
    </div>
  );
};

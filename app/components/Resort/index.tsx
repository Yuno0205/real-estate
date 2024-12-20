import luxury from "@/public/static/images/luxury.jpg";
import { Arsenal, Pinyon_Script } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import mb1 from "@/public/static/images/mb1.jpg";
import mb2 from "@/public/static/images/mb2.jpg";
import mb3 from "@/public/static/images/mb3.jpg";
import mb4 from "@/public/static/images/mb4.jpg";
import flat1 from "@/public/static/images/flat1.jpg";
import flat2 from "@/public/static/images/flat2.jpg";
import flat3 from "@/public/static/images/flat3.jpg";
import flat4 from "@/public/static/images/flat4.jpg";

const arsenal = Arsenal({
  subsets: ["vietnamese", "latin"],
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
        className="w-full  h-[300px] bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat xs:bg-cover"
      >
        <div className="max-w-[1140px] mx-auto flex mt-auto h-full items-end">
          <div className="flex flex-col w-full px-4">
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
        className="w-full h-full  my-[104px] xs:my-[50px]"
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

      <section className="w-full min-h-screen px-20 xs:px-5 text-center">
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <span
            className={clsx(
              arsenal.className,
              "text-5xl text-[#1E5675] font-semibold uppercase"
            )}
          >
            MẶT BẰNG NHÀ LIÊN KẾ
          </span>
          <div className="flex gap-2 md:flex-wrap md:justify-between">
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="mb1" src={mb1} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="mb2" src={mb2} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="mb3" src={mb3} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="mb4" src={mb4} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <span
            className={clsx(
              arsenal.className,
              "text-5xl text-[#1E5675] font-semibold uppercase mb-12 mt-24"
            )}
          >
            MẶT BẰNG CĂN GỐC
          </span>
          <div className="flex gap-2 md:flex-wrap md:justify-between xs:gap-4">
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="flat1" src={flat1} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="flat2" src={flat2} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="flat3" src={flat3} />
            </div>
            <div className="w-1/4 md:w-2/5 xs:w-full">
              <Image alt="flat4" src={flat4} />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundSize: "8% auto" }}
        className="w-full h-[250px] md:h-[100px] bg-[url('/static/images/leaft_left.png')] bg-bottom-left bg-no-repeat my-10"
      ></section>
    </div>
  );
};

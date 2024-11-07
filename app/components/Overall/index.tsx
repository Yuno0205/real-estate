import clsx from "clsx";
import { Arsenal, Pinyon_Script, Roboto } from "next/font/google";
import Image from "next/image";
import congvien from "@/public/static/images/congvienvensong.jpg";
import mapImg from "@/public/static/images/mat-do-xay-dung-ecopark-1024x724.jpg";

const arsenal = Arsenal({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
export default function Overall() {
  return (
    <>
      <div className="py-[60px] bg-[#DFFDE8]">
        <div className="text-center gap-2 flex flex-col">
          <h2
            className={clsx(
              "text-6xl uppercase text-[#2065AD]",
              arsenal.className
            )}
          >
            Sức hấp dẫn của
          </h2>
          <span
            className={clsx("text-6xl mt-3 text-[#3F737B]", pinyon.className)}
          >
            Kiến trúc cộng sinh tại dự án
          </span>
        </div>
      </div>
      <div className="flex bg-[#A6EEF182]">
        <div className="w-1/3 px-4">
          <div>
            <Image src={congvien} alt="overall" className="object-cover" />
          </div>
          <span className="py-[5px] px-4 mb-5 text-white bg-[#115475] font-semibold">
            Hệ sinh thái tự nhiên
          </span>
        </div>
        <div className="w-1/3 px-4">
          <div>
            <Image src={congvien} alt="overall" />
          </div>
          <span className="py-[5px] px-4 mb-5 text-white bg-[#115475] font-semibold">
            Hệ sinh thái tự nhiên
          </span>
        </div>
        <div className="w-1/3 px-4">
          <div>
            <Image src={congvien} alt="overall" />
          </div>
          <span className="py-[5px] px-4 mb-5 text-white bg-[#115475] font-semibold">
            Hệ sinh thái tự nhiên
          </span>
        </div>
      </div>

      <section className="pt-[60px] pb-[80px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#A6EEF1] to-[#F3F3F3] opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full bg-[url('/static/images/leaft_right.png')] bg-right-bottom bg-no-repeat bg-[20%_auto] opacity-50 pointer-events-none"></div>

        <div className="relative flex z-2">
          <div className="w-3/4 object-cover">
            <Image
              src={mapImg}
              alt="matdoxaydung"
              className="rounded-xl object-cover"
            />
          </div>
          <div className="w-1/4 flex">
            <div className="w-full h-full bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat bg-[56%_auto] px-5 flex flex-col relative justify-center">
              <div className="mb-5">
                <h5 className="text-left">
                  <span
                    className={clsx(
                      "text-[#286278] font-semibold text-5xl",
                      arsenal.className
                    )}
                  >
                    55 HA{" "}
                  </span>
                  <span
                    className={clsx(
                      "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-3xl",
                      arsenal.className
                    )}
                  >
                    BÊN DÒNG SÔNG THƠ MỘNG
                  </span>
                </h5>
              </div>

              <div>
                <h5 className="text-left mt-6 mb-11">
                  <span
                    className={clsx(
                      "text-[#286278] font-bold text-5xl",
                      roboto.className
                    )}
                  >
                    16,5 HA{" "}
                  </span>
                  <span
                    className={clsx(
                      "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-3xl uppercase",
                      arsenal.className
                    )}
                  >
                    Cây xanh, công viên, mặt nước nội khu
                  </span>
                </h5>
              </div>

              <ol
                className={clsx(
                  "list-decimal list-inside text-left text-[#2B5169] font-semibold",
                  arsenal.className
                )}
              >
                <li className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]">
                  <span>Công viên Six Senses</span>
                  <span
                    className={clsx("text-[#D67627] text-lg", roboto.className)}
                  >
                    {" "}
                    2 ha
                  </span>
                </li>

                <li className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]">
                  <span>Quảng trường All Blue</span>
                  <span
                    className={clsx("text-[#D67627] text-lg", roboto.className)}
                  >
                    {" "}
                    2 ha
                  </span>
                </li>

                <li className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]">
                  <span>Công viên nội khu </span>
                  <span
                    className={clsx("text-[#D67627] text-lg", roboto.className)}
                  >
                    {" "}
                    2 ha
                  </span>
                </li>

                <li className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]">
                  <span> Cây xanh nội khu</span>
                  <span
                    className={clsx("text-[#D67627] text-lg", roboto.className)}
                  >
                    {" "}
                    5.5 ha
                  </span>
                </li>

                <li className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]">
                  <span> Mặt nước nội khu</span>
                  <span
                    className={clsx("text-[#D67627] text-lg", roboto.className)}
                  >
                    {" "}
                    5 ha
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

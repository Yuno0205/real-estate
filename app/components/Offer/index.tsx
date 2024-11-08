import clsx from "clsx";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
export const Offer = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[1140px] mx-auto px-12 py-14 bg-[#FF7A56] shadow-xl  tracking-wider mb-[-140px] z-2 relative">
        <div className="flex gap-2">
          <div className="flex w-1/4">
            <div className="flex flex-col justify-center gap-2">
              <span>Kiến tạo chốn an bình bắt đàu bằng sự cân bằng !</span>
              <span className="text-2xl font-semibold">Chính thức mở bán</span>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <ul className="list-none  tracking-wider">
              <li className="flex gap-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  color="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span className="font-semibold">Chiết khấu đến 15%</span>
              </li>
              <li className="flex gap-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  color="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span className="font-semibold">
                  Thanh toán chỉ 30% đến khi nhận nhà
                </span>
              </li>
              <li className="flex gap-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  color="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span className="font-semibold">
                  Tặng gói dịch vụ quản lý 36 tháng
                </span>
              </li>
            </ul>
          </div>
          <div className="flex w-1/4 justify-center items-center">
            <div>
              <div className="flex items-center gap-2 bg-[#ED7856] border-2 border-black px-10 py-4 cursor-pointer">
                <div
                  className={clsx(
                    arsenal.className,
                    "text-sm font-semibold uppercase text-white"
                  )}
                >
                  Đăng ký tư vấn
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                  color="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

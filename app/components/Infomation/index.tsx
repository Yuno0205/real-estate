import clsx from "clsx";
import { Arsenal } from "next/font/google";
import ContactForm from "../ContactForm";

const arsenal = Arsenal({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});
export const Infomation = () => {
  return (
    <section className="w-full h-full min-h-screen bg-[url('/static/images/bg-footer.png')] relative py-24">
      {/* Lớp phủ */}
      <div className="w-full h-full absolute bg-[#241526] opacity-80 top-0 left-0 z-0"></div>

      {/* Nội dung */}
      <div className="max-w-[1140px] mx-auto relative z-5 flex gap-10 md:flex-col px-4">
        <div className="w-2/5 px-4 flex flex-col md:w-full ">
          <h1
            className={clsx(
              arsenal.className,
              "text-2xl text-white font-semibold mb-3 xs:text-center"
            )}
          >
            THÔNG TIN LIÊN HỆ
          </h1>
          <div>
            <ul className="list-none flex flex-col gap-2 text-[#C1DCDE]">
              <li className="p-2 flex gap-2 hover:bg-[#0C4E93] cursor-pointer rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <span className="font-semibold">Hotline: 035.782.2351</span>
              </li>
              <li className="p-2 flex gap-2 hover:bg-[#0C4E93] cursor-pointer rounded-xl">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>

                <span className="font-semibold">
                  Địa chỉ: Số 3 đường số 4, Khu dân cư Himlam, Phường Tân Phong,
                  Quận 7, Thành phố Hồ Chí Minh.
                </span>
              </li>
              <li className="p-2 flex gap-2 hover:bg-[#0C4E93] cursor-pointer rounded-xl">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>

                <span className="font-semibold">
                  Nhà mẫu: Đường 826E, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long
                  An.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/5 flex flex-col md:w-full">
          <div className="w-full px-8 py-4 border-2 border-[#B5B2B2] rounded-xl text-center">
            <span
              className={clsx(
                "text-white text-2xl uppercase",
                arsenal.className
              )}
            >
              Đăng kí nhận thông tin dự án
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

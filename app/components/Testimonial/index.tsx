import clsx from "clsx";
import { Arsenal } from "next/font/google";
import styles from "./style.module.css";
const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const Testimonial = () => {
  return (
    <section className="w-full h-full py-[130px] bg-[#F7F7F7]">
      <div className="max-w-[1140px] mx-auto">
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-center mb-20">
            <h4 className="flex flex-col justify-center items-center gap-2">
              <span
                className={clsx(
                  arsenal.className,
                  "text-[#262B35] text-4xl uppercase"
                )}
              >
                Khách hàng nói gì về
              </span>
              <span className="text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#309BCF] to-[#4174BE]">
                Ecopark?
              </span>
            </h4>
          </div>
          <div className="w-full h-full flex">
            <div className="w-1/3 px-4">
              <div className="flex flex-col gap-2">
                <div
                  className={clsx(
                    styles.egde,
                    "py-8 px-10 mb-9 bg-white rounded"
                  )}
                >
                  <span
                    className={clsx(
                      arsenal.className,
                      "text-[#482727] leading-7 relative"
                    )}
                  >
                    Nơi đây mang giá trị sống rất tuyệt vời về không gian và cả
                    lối sống của người dân. Lời nói tôi được nghe nhiều nhất ở
                    Ecopark chính là “cám ơn và xin lỗi”. Tôi rất vui khi được
                    là 1 cư dân trong cộng đồng văn minh tại nơi đây!
                  </span>
                </div>
                {/* Avatar */}
                <div></div>
              </div>
            </div>
            <div className="w-1/3">2</div>
            <div className="w-1/3">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

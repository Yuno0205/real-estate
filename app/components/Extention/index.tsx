import clsx from "clsx";
import { Smooch, Arsenal } from "next/font/google";
import React from "react";
import vuonamthanh from "@/public/static/images/vuonamthanh.jpg";
import Image from "next/image";

const smooch = Smooch({
  subsets: ["vietnamese", "latin"],
  weight: "400",
});

const arsenal = Arsenal({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});
export const Extention = () => {
  return (
    <div
      style={{ backgroundSize: "10% auto" }}
      className="py-[130px] w-full min-h-screen bg-[url('/static/images/bg.png')] bg-center"
    >
      <div className="max-w-[1140px] mx-auto ">
        <div className="w-full flex flex-col text-center mb-[84px]">
          <span
            className={clsx("text-8xl text-[#151E51] mb-4", smooch.className)}
          >
            Tiện ích
          </span>
          <span
            className={clsx("text-[#484545] font-semibold", arsenal.className)}
          >
            Kiến tạo vùng xanh trường thọ bắt đầu từ sự cân bằng
          </span>
          <span className="text-[#2C6595] text-2xl font-semibold py-3">
            THÂN - TÂM - TRÍ
          </span>

          <span
            className={clsx("text-[#484545] font-semibold", arsenal.className)}
          >
            dành tặng cho cư dân đặc quyền trị liệu từ thiên nhiên
          </span>
        </div>
        {/* Slider */}
        <div className="w-full text-center">
          <Image alt="vuonamthanh" src={vuonamthanh} />
          <span
            className={clsx(
              "text-2xl text-[#6E6B6B] font-semibold",
              arsenal.className
            )}
          >
            Vườn âm thanh
          </span>
        </div>
      </div>
    </div>
  );
};

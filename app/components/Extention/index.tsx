import clsx from "clsx";
import { Smooch, Arsenal } from "next/font/google";
import React from "react";
import park from "@/public/static/images/4spark.jpg";
import Image from "next/image";

const smooch = Smooch({
  subsets: ["vietnamese", "latin", "latin-ext"],
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
      className="py-[130px] xs:py-[100px] w-full min-h-screen bg-[url('/static/images/bg.png')] bg-center relative"
    >
      <div
        style={{ backgroundSize: "10% auto" }}
        className="absolute w-full h-full bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat"
      ></div>
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
          <Image alt="4spark" src={park} />
          <span
            className={clsx(
              "text-2xl text-[#6E6B6B] font-semibold",
              arsenal.className
            )}
          >
            Vườn công viên 4 mùa
          </span>
        </div>
      </div>
    </div>
  );
};

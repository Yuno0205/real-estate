"use client";

import React from "react";
import Image from "next/image";
import { Arsenal } from "next/font/google";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import show1 from "@/public/static/images/show1.png";
import show2 from "@/public/static/images/show2.png";
import show3 from "@/public/static/images/show3.png";
import show4 from "@/public/static/images/show4.png";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

const Showcase = () => {
  const images = [show1, show2, show3, show4];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full py-28 xs:py-16">
        <div className="max-w-[1140px] mx-auto flex justify-center flex-col items-center xs:text-center">
          <span className={clsx(arsenal.className, "text-5xl uppercase")}>
            Khách hàng Nhận nhà tại
          </span>
          <span
            className={clsx(
              arsenal.className,
              "text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#395F2E] to-[#003F2D] py-2",
            )}
          >
            Elite Life
          </span>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[1400px]"
        >
          <CarouselContent className="-ml-4">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                // SỬA LẠI ĐOẠN NÀY CHO DESKTOP-FIRST:
                // - basis-1/3: Mặc định (PC) hiện 3 hình.
                // - md:basis-1/2: Dưới 1024px hiện 2 hình.
                // - xs:basis-full: Dưới 768px hiện 1 hình.
                className="pl-4 basis-1/3 md:basis-1/2 xs:basis-full"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg select-none">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Nút Previous/Next cũng cần ẩn hiện theo desktop-first logic nếu muốn */}
          <CarouselPrevious className="left-4 hidden md:flex" />
          <CarouselNext className="right-4 hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Showcase;

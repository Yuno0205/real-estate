"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import show1 from "@/public/static/images/show1.png";
import show2 from "@/public/static/images/show2.png";
import show3 from "@/public/static/images/show3.png";
import show4 from "@/public/static/images/show4.png";
import Image from "next/image";
import { Arsenal } from "next/font/google";
import clsx from "clsx";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

const Showcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="w-full">
      <div className="w-full py-28">
        <div className="max-w-[1140px] mx-auto flex justify-center flex-col items-center">
          <span className={clsx(arsenal.className, "text-5xl uppercase")}>
            Khách hàng Nhận nhà tại
          </span>
          <span
            className={clsx(
              arsenal.className,
              "text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#395F2E] to-[#003F2D] py-2"
            )}
          >
            Elite Life
          </span>
        </div>
      </div>
      <Slider
        {...settings}
        lazyLoad="progressive"
        autoplay
        autoplaySpeed={3000}
      >
        <div className="slide-item">
          <Image src={show1} alt="Slide 1" />
        </div>
        <div className="slide-item">
          <Image src={show2} alt="Slide 2" />
        </div>
        <div className="slide-item">
          <Image src={show3} alt="Slide 3" />
        </div>
        <div className="slide-item">
          <Image src={show4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Showcase;

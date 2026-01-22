"use client";
import { BlueZoneFields } from "@/types/contentful";
import clsx from "clsx";
import { Calistoga } from "next/font/google";
import { useState } from "react";
import ReactPlayer from "react-player";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

export default function BlueZone({ data }: { data: BlueZoneFields }) {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className="min-h-[800px] bg-[url('/static/images/sea.png')] bg-cover bg-center bg-no-repeat py-[160px] bg-[#D4FEC8]">
      <div className="relative mx-auto flex min-h-[300px] max-w-[1140px] justify-center">
        <div className="flex min-h-1 w-2/3 flex-col items-center relative 2xs:w-full 2xs:px-4">
          {/* Play button */}
          <div
            onClick={() => setIsPlay(!isPlay)}
            className="relative mb-12 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#FF7A56] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
              color="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            <div className="absolute w-full h-full top-0 left-0 animate-ping rounded-full bg-[#FF7A56] opacity-75 duration-3000"></div>
          </div>

          {/* Title */}
          <div className="mb-12 text-center">
            <h2
              className={clsx(
                "text-5xl font-normal py-4 leading-tight",
                calistoga.className
              )}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #3F737B 0%, #2065AD 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="pb-4">{data.title1} </span>
              <br />
              <span className="mt-4"> {data.title2}</span>
            </h2>
          </div>

          {/* Quote */}
          <div
            className="mb-6 w-full border-l-4 pl-8"
            style={{
              borderColor: "#232323",
              borderLeftWidth: "5px",
            }}
          >
            <div className="flex flex-col justify-between gap-3">
              {/* Book icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span className="font-semibold text-[#25436E]">
                {data.content}
              </span>
            </div>
          </div>

          {/* <div className="mb-6">
            <p
              className={clsx(roboto.className, "leading-loose text-[#1F3A5B]")}
            >
              Trên khắp thế giới, có năm vùng đất được tìm ra với cái tên “Blue
              Zones gồm: Vùng Loma Linda (bang California, Mỹ), Đảo Ikaria (Hy
              Lạp), Okinawa (Nhật Bản), Sardinia (Italy) và bán đảo Nicoya
              (Costa Rica). Điểm chung của những vùng đất này là thiên nhiên
              trong lành, con người sống gần gũi với thiên nhiên trong từng hơi
              thở, bước đi, bữa ăn, giấc ngủ.
            </p>
          </div> */}

          {isPlay && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              onClick={() => setIsPlay(false)}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=rVF_-RB69is"
                height="60%"
                playing
                controls
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

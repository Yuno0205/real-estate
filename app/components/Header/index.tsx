"use client";
import Image from "next/image";
import flagVN from "@/public/static/images/vi.svg";
import flagUSA from "@/public/static/images/en-us.svg";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify the weights you want to use
});
export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className="w-full">
      <nav className="fixed top-0 z-10 left-0 right-0">
        <section className=" px-9 relative bg-[#506E4F]">
          <div className="flex items-center max-w-[1140px] mx-auto h-full  min-h-[70px] justify-between">
            {/* <div className="w-1/6 px-4 py-2.5">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  className="object-cover"
                  height={68}
                />
              </Link>
            </div> */}
            <div className="w-3/4 flex justify-end h-full md:hidden">
              <ul className="flex justify-end">
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/"}
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/about"}
                  >
                    Tổng quan
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Vị trí
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Tiện ích
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Phân khu
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-[16px] font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx(
                      "text-white uppercase mx-5 font-semibold py-6 text-sm",
                      playfair.className
                    )}
                    href={"/contact"}
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="text-white hidden md:flex"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            <div className="flex ">
              <div className="px-[15px]">
                <div className="flex gap-1">
                  <Image
                    src={flagVN}
                    alt="flagUSA"
                    width={24}
                    className="object-cover"
                  />
                  <Image
                    src={flagUSA}
                    alt="flagUSA"
                    width={24}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white w-full ">
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: isExpanded ? "auto" : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden space-y-6"
          >
            <li className="mx-[16px] pt-6">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Trang chủ
              </Link>
            </li>
            <li className="mx-[16px]">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Tổng quan
              </Link>
            </li>
            <li className="mx-[16px]">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Vị trí
              </Link>
            </li>
            <li className="mx-[16px]">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Tiện ích
              </Link>
            </li>
            <li className="mx-[16px]">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Phân khu
              </Link>
            </li>
            <li className="mx-[16px]">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Tin tức
              </Link>
            </li>
            <li className="mx-[16px] pb-6">
              <Link
                className={clsx(
                  "text-black uppercase font-semibold text-sm px-4",
                  playfair.className
                )}
                href={"/"}
              >
                Liên hệ
              </Link>
            </li>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
}

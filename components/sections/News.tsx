import clsx from "clsx";
import { Arsenal } from "next/font/google";
import Image from "next/image";
import new1 from "@/public/static/images/new1.png";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const News = () => {
  return (
    <div className="w-full py-32 xs:py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="w-full text-center flex flex-col gap-3 mb-12">
          <span className={clsx("text-5xl uppercase font-semibold")}>
            Tin tức & <span className="text-[#20507D]">Sự kiện</span>
          </span>
          <span
            className={clsx(
              arsenal.className,
              "leading-7 font-bold text-[#1A388E] text-lg py-5"
            )}
          >
            Cập nhật tin tức và sự kiện mở bán mới nhất của dự án Elite Life
          </span>
        </div>
        <div className="w-full flex gap-3 md:flex-wrap md:justify-center">
          <div className="w-1/4 p-5 flex flex-col md:w-5/12 xs:w-full">
            <Image src={new1} alt="logo" className="rounded-lg mb-10" />
            <div className="mb-8">
              <div className="mb-5">
                <Link href="/news">
                  <span className="font-bold">
                    Nhà phố, biệt thự EliteLiffe - không gian sống tương tác với
                    thiên nhiên
                  </span>
                </Link>
              </div>
              <div className="mb-5">
                <span>
                  Nhiều năm trở lại đây đô thị hoá diễn ra rất nhanh ở...
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/4 p-5 flex flex-col md:w-5/12 xs:w-full">
            <Image src={new1} alt="logo" className="rounded-lg mb-10" />
            <div className="mb-8">
              <div className="mb-5">
                <Link href="/news">
                  <span className="font-bold">
                    Chủ động chăm sóc sức khỏe tại gia khi mua nhà tại Elite
                    Life
                  </span>
                </Link>
              </div>
              <div className="mb-5">
                <span>
                  Tại Elite Life hệ thống thể dục, thể thao và đường chạy dọc bờ
                  kênh
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/4 p-5 flex flex-col md:w-5/12 xs:w-full">
            <Image src={new1} alt="logo" className="rounded-lg mb-10" />
            <div className="mb-8">
              <div className="mb-5">
                <Link href="/news">
                  <span className="font-bold">
                    Elite Life - 6 giá trị khác biệt tại Long Hậu, Long An
                  </span>
                </Link>
              </div>
              <div className="mb-5">
                <span>
                  1. Giá trị vị trí - tâm điểm kết nối trong khu đô...
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/4 p-5 flex flex-col md:w-5/12 xs:w-full">
            <Image src={new1} alt="logo" className="rounded-lg mb-10" />
            <div className="mb-8">
              <div className="mb-5">
                <Link href="/news">
                  <span className="font-bold">
                    Tác dụng của kiến trúc xanh, gạch tự chèn nội khu
                  </span>
                </Link>
              </div>
              <div className="mb-5">
                <span>Tại sao dự án Elite Life lại sử dụng gạch tự chèn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end xs:justify-center">
          <div className="max-w-[300px] flex gap-3 bg-gradient-to-r from-[#395F2E] to-[#003F2D] py-4 px-5 rounded-lg text-white font-bold cursor-pointer">
            Xem thêm nhiều tin tức mới
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

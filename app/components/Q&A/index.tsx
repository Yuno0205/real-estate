"use client";
import city from "@/public/static/images/city.jpg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

type AccordionItemValue = "item-1" | "item-2" | "item-3" | "item-4";
export const QandA = () => {
  const [openItem, setOpenItem] = useState<AccordionItemValue | null>(null);

  const toggleItem = (item: AccordionItemValue) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section className="w-full min-h-screen min-h-1 flex md:flex-col">
      <div className="w-1/2 md:w-full flex 2xs:aspect-square">
        <Image
          src={city}
          alt="city"
          className="object-cover h-full transition duration-300 ease-in"
        />
      </div>
      <div className="w-1/2 md:w-full flex flex-col bg-[#241526] px-32 py-28 md:p-20 xs:px-8">
        <span className="text-[#FF7A56]">HỎI ĐÁP (Q & A)</span>
        <span className="text-white leading-8 pr-4 py-5 ">
          Là một dự án mới mang tính tiên phong cho xu hướng kiến trúc cộng sinh
          tại khu Nam Sài Gòn chúng tôi hiểu rằng quý khách hàng và nhà đầu tư
          sẽ có rất nhiều câu hỏi về dự án này. Dưới đây là một số câu hỏi và
          câu trả lời (Q&A) mà chúng tôi đã tổng hợp cho Dự án Elite Life
        </span>
        <div className="w-full h-full">
          <Accordion type="single" collapsible className="w-full text-white ">
            <AccordionItem
              value="item-1"
              className={`${
                openItem === "item-1" ? "bg-[#1C101E]" : "bg-[#241526]"
              }`}
              onClick={() => toggleItem("item-1")}
            >
              <AccordionTrigger className="pl-12 xs:pl-6 pr-6 pb-4 pt-8 hover:no-underline leading-8">
                An ninh trong khu biệt thự được quản lý ra sao khi phân khu này
                đi vào hoạt động?
              </AccordionTrigger>
              <AccordionContent className="text-[#A9C4C3] px-12 pb-10 leading-8">
                Elite Life là khu nhà phố compound khép kín có kiểm soát An ninh
                nhiều lớp an ninh, từ ngay tại cổng chỉnh dự án và camera an
                ninh từng phân khu. Với hệ thống Camera an ninh toàn dự án, và
                An ninh cơ động sẽ đảm bảo an toàn 24/7 cho Cư dân. Đồng thời,
                Đơn vị vận hành sẽ phối hợp chặt chẽ và nhanh chóng với các cơ
                quan ban ngành để đảm bảo trật tựvà sự an lành cho toàn khu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={`${
                openItem === "item-2" ? "bg-[#1C101E]" : "bg-[#241526]"
              }`}
              onClick={() => toggleItem("item-2")}
            >
              <AccordionTrigger className="pl-12 xs:pl-6 pr-6 pb-4 pt-8 hover:no-underline leading-8">
                Khu biệt thự nhiều cây xanh thì hệ thống đèn chiếu sáng sẽ hoạt
                động trong thời gian cố định nào, camera bảo vệ đặt ở những đâu?
                Có mấy chốt bảo vệ?
              </AccordionTrigger>
              <AccordionContent className="text-[#A9C4C3] px-12 pb-10 leading-8">
                Elite Life là khu nhà phố compound khép kín có kiểm soát An ninh
                nhiều lớp an ninh, từ ngay tại cổng chỉnh dự án và camera an
                ninh từng phân khu. Với hệ thống Camera an ninh toàn dự án, và
                An ninh cơ động sẽ đảm bảo an toàn 24/7 cho Cư dân. Đồng thời,
                Đơn vị vận hành sẽ phối hợp chặt chẽ và nhanh chóng với các cơ
                quan ban ngành để đảm bảo trật tựvà sự an lành cho toàn khu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className={`${
                openItem === "item-3" ? "bg-[#1C101E]" : "bg-[#241526]"
              }`}
              onClick={() => toggleItem("item-3")}
            >
              <AccordionTrigger className="pl-12 xs:pl-6 pr-6 pb-4 pt-8 hover:no-underline leading-8">
                Khu vực Onsen 15.000m2 những ai được sử dụng dịch vụ, Cư dân có
                được sử dụng hay không? Phí dự kiến nếu Cư dân sử dụng?
              </AccordionTrigger>
              <AccordionContent className="text-[#A9C4C3] px-12 pb-10 leading-8">
                Elite Life là khu nhà phố compound khép kín có kiểm soát An ninh
                nhiều lớp an ninh, từ ngay tại cổng chỉnh dự án và camera an
                ninh từng phân khu. Với hệ thống Camera an ninh toàn dự án, và
                An ninh cơ động sẽ đảm bảo an toàn 24/7 cho Cư dân. Đồng thời,
                Đơn vị vận hành sẽ phối hợp chặt chẽ và nhanh chóng với các cơ
                quan ban ngành để đảm bảo trật tựvà sự an lành cho toàn khu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className={`${
                openItem === "item-4" ? "bg-[#1C101E]" : "bg-[#241526]"
              }`}
              onClick={() => toggleItem("item-4")}
            >
              <AccordionTrigger className="pl-12 xs:pl-6 pr-6 pb-4 pt-8 hover:no-underline leading-8">
                Khách hàng có được neo đậu du thuyền cá nhân trước villas hay
                không?
              </AccordionTrigger>
              <AccordionContent className="text-[#A9C4C3] px-12 pb-10 leading-8">
                Elite Life là khu nhà phố compound khép kín có kiểm soát An ninh
                nhiều lớp an ninh, từ ngay tại cổng chỉnh dự án và camera an
                ninh từng phân khu. Với hệ thống Camera an ninh toàn dự án, và
                An ninh cơ động sẽ đảm bảo an toàn 24/7 cho Cư dân. Đồng thời,
                Đơn vị vận hành sẽ phối hợp chặt chẽ và nhanh chóng với các cơ
                quan ban ngành để đảm bảo trật tựvà sự an lành cho toàn khu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import city from "@/public/static/images/city.jpg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const QandA = () => {
  return (
    <section className="w-full min-h-screen flex">
      <div className="w-1/2">
        <Image
          src={city}
          alt="city"
          className="object-cover h-full transition duration-300 ease-in"
        />
      </div>
      <div className="w-1/2 flex flex-col bg-[#241526] px-32 py-28 ">
        <span className="text-[#FF7A56]">HỎI ĐÁP (Q & A)</span>
        <span className="text-white leading-8 pr-4 py-5">
          Là một dự án mới mang tính tiên phong cho xu hướng kiến trúc cộng sinh
          tại khu Nam Sài Gòn chúng tôi hiểu rằng quý khách hàng và nhà đầu tư
          sẽ có rất nhiều câu hỏi về dự án này. Dưới đây là một số câu hỏi và
          câu trả lời (Q&A) mà chúng tôi đã tổng hợp cho Dự án Elite Life
        </span>
        <div className="w-full h-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

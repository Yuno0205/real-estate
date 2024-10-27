import clsx from "clsx";
import { Arsenal } from "next/font/google";
import styles from "./style.module.css";
import Image from "next/image";

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const Testimonial = () => {
  const testimonials = [
    {
      text: "Nơi đây mang giá trị sống rất tuyệt vời về không gian và cả lối sống của người dân. Lời nói tôi được nghe nhiều nhất ở Ecopark chính là 'cám ơn và xin lỗi'. Tôi rất vui khi được là 1 cư dân trong cộng đồng văn minh tại nơi đây!",
      name: "Chị Dương",
      role: "Cư dân Aquabay",
      avatar: "/static/images/picture1_1620891462-150x150.png",
    },
    {
      text: "Sự khác biệt về cuộc sống mà tôi tìm thấy ở Ecopark đó là sự ấm áp của tình cảm gia đình. Tôi cảm thấy rất vui vẻ khi về tới nhà, nơi đây đã giúp thời gian các thành viên gia đình tôi dành cho nhau ngày càng nhiều hơn và tình cảm vì thế cũng càng gắn kết hơn. Cảm ơn Ecopark rất nhiều",
      name: "Anh Lộc",
      role: "Cư dân Aquabay",
      avatar: "/static/images/anh-Loc-aquabay-150x150.jpg",
    },
    {
      text: "Khi quyết định về Ecopark thực sự gia đình anh mới được sống và tồn tại thực sự theo đúng nghĩa. Quyết định về Ecopark sống quả là quyết định đúng nhất của mình 5 năm trở lại đây. Đây là môi trường sống lí tưởng cho mọi người, mọi nhà.",
      name: "Anh Bắc",
      role: "Cư dân Ecopark",
      avatar: "/static/images/aoxanh_1609949047.jpg",
    },
  ];

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
          <div className="w-full h-full flex gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 px-4">
                <div className="flex flex-col gap-6">
                  <div
                    className={clsx(
                      styles.edge,
                      "py-8 px-10 bg-white rounded-lg shadow-md"
                    )}
                  >
                    <span
                      className={clsx(
                        arsenal.className,
                        "text-[#482727] leading-7 relative"
                      )}
                    >
                      {testimonial.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">
                        {testimonial.name}
                      </span>
                      <span className="text-sm font-xs">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

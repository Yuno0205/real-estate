import logo from "@/public/static/images/download (1).svg";
import clsx from "clsx";
import { Arsenal } from "next/font/google";
import Image from "next/image";
import image from "@/public/static/images/duongdapxexuyenrung.jpg";

const arsenal = Arsenal({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});
export const Exp = () => {
  return (
    <section className="w-full h-full py-24 bg-[url('/static/images/bg-eco.webp')] bg-cover transition duration-300 ease-in">
      <div className="max-w-[1140px] mx-auto flex justify-center gap-10">
        <div className="w-2/5 flex flex-col">
          <div className="flex justify-center w-full py-10">
            <Image width={100} height={100} src={logo} alt="logo" />
          </div>
          <div className="flex flex-col">
            <p
              className={clsx(
                arsenal.className,
                "mb-6 text-white font-semibold"
              )}
            >
              Với kinh nghiệm hơn 21 năm hoạt động trong lĩnh vực bất động sản,
              Ecopark ghi dấu ấn mạnh mẽ trong lòng người dân. Xứng danh là đơn
              vị tiên phong kết hợp thành công giữa kiến trúc và thiên nhiên.
              Tạo ra nhiều dự án đẳng cấp, chất lượng bền vững cùng thời gian.
            </p>
            <p
              className={clsx(
                arsenal.className,
                "mb-6 text-white font-semibold"
              )}
            >
              Sự thành công của chủ đầu tư còn được thể hiện qua những dự án
              đang hiện hữu trên thị trường: Ecorivers Hải Dương, Ecopark Hưng
              Yên, Eco Central Park Vinh và mới nhất là Eco Village Saigon
              River.
            </p>
          </div>
          <button className="bg-black text-white px-7 border border-black py-3 text-center w-[150px] rounded flex items-center justify-center hover:bg-transparent hover:text-black hover:border hover:border-black">
            <span className="text-xs font-semibold">Tìm hiểu thêm</span>
          </button>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <Image
            src={image}
            alt="eco"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

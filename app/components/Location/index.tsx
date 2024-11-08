import clsx from "clsx";
import { David_Libre, Italianno, Arsenal } from "next/font/google";
import Image from "next/image";
import location from "@/public/static/images/map.png";
import location2 from "@/public/static/images/Vi-tri-dac-diaEco-Village-Sai-Gon-River-1024x512.jpg";
import tienich from "@/public/static/images/tien-ich-ecovillage-saogon-river.jpg";
import leaf from "@/public/static/images/leaft_left.png";

const david = David_Libre({
  subsets: ["vietnamese"],
  weight: "400",
});

const itali = Italianno({
  subsets: ["vietnamese"],
  weight: "400",
});

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
export const Location = () => {
  return (
    <div className="w-full relative">
      {/* <div
        style={{
          backgroundSize: "10% auto",
          backgroundPosition: "0% 0%",
        }}
        className="absolute w-full h-[250px] bg-[url('/static/images/leaft_left.png')] bg-no-repeat transform rotate-45"
      ></div> */}
      {/* <section className="my-16 flex">
        <div className="w-1/2 ml-1 mr-6 px-4 flex items-center">
          <div className="flex flex-col w-full gap-3">
            <div className="w-full text-end pr-5">
              <span
                className={clsx(
                  "text-4xl  text-[#0C4E93] uppercase",
                  david.className
                )}
              >
                Vùng đất Blue Zone
              </span>
            </div>
            <div className="text-end">
              <span className="w-1/12 h-[1px] bg-[#bcbcbc] inline-block align-middle mb-4"></span>
              <span
                className={clsx("text-[#BA6C1C] text-5xl ", itali.className)}
              >
                Cách nhà thờ Đức Bà 18km
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 pl-4 pr-4 md:pr-52">
          <div className={clsx("flex flex-col", arsenal.className)}>
            <p className="font-semibold text-black text-justify mb-6">
              Sở hữu vị trí ôm trọng dòng sông Đồng Nai hiền hòa, Ecovillage
              Saigon River hiện lên như một ốc đảo xanh an bình bên thành phố Hồ
              Chí Minh sôi động.
            </p>
            <p className="font-semibold text-black text-justify mb-6">
              Dự án nằm tại Xã Đại Phước ,Huyện Nhơn Trạch, Tỉnh Đồng Nai một
              trong những tỉnh có tốc độ phát triển cơ sở hạ tầng nhanh nhất cả
              nước. Chỉ với một vài phút lái xe cư dân Ecovillage Saigon River
              có thể dễ dàng chọn lựa cho mình cả 03 phương thước giao thông bao
              gồm đường hàng không, đường thủy và cao tốc.
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className="mt-[100px] w-full max-w-[1140px] flex justify-center mx-auto">
        <Image
          alt="location"
          src={location}
          className="object-cover rounded-lg"
        />
      </section> */}
      <section className="my-[85px] max-w-[1140px] mx-auto flex">
        <div className="w-1/2 px-4">
          <span className="font-bold text-2xl">Giao thông thuận tiện</span>
          <p className="font-semibold text-black text-justify mb-6 mt-3">
            Tiếp giáp cùng lúc 03 tuyến giao thông huyết mạch: DT769, vành đai
            03 hay cao tốc Bến Lức – Long Thành… kết nối trực tiếp tới chợ Bến
            Thành là giá trị kiểm chứng cho kết nối giao thông vô cùng thuận
            tiện cho mỗi căn nhà góc phố tại Eco Village Sai Gòn River
          </p>
          <p className="font-semibold text-black text-justify mb-6">
            với vị trí cách chợ Bến Thành chỉ 18km, giáp sông Sài Gòn, cư dân
            tại Eco Village Sài Gòn như đang sở hữu cho riêng mình một liên kết
            tiện ích phong phú và đa dạng bậc nhất.
          </p>
        </div>
        <div className="w-1/2 px-4">
          <Image
            alt="location"
            src={location}
            className="object-cover rounded-xl"
            quality={100}
          />
        </div>
      </section>
      <div className="w-full bg-[url(/static/images/leaft_right.png)] bg-right-bottom bg-no-repeat">
        <section className="max-w-[1140px] mx-auto flex gap-8">
          <div className="w-2/3 px-4">
            <Image
              alt="location"
              src={tienich}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3 px-4 ">
            <div className="bg-transparent bg-gradient-to-b from-[#D4B6A442] to-[#CFCFCF47] flex w-full h-full rounded-xl">
              {/* Items */}
              <ol className="flex flex-col justify-center items-center w-full h-full px-4">
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    1. Bến du thuyền
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    2. Six Sense Park
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    3. Resort Clubhouse
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    4. Kempinski Clubhouse
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    5. Kempinski Resort
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    6. Quảng trường All Blue
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    7. Onsen Clubhouse
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    8. Đại lộ Boulevard
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    9. Sport Clubhouse
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    10. Công viên, vườn trái cây nhiệt đới
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

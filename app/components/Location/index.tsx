import location from "@/public/static/images/map.png";
import location2 from "@/public/static/images/map2.jpg";
import clsx from "clsx";
import { David_Libre, Italianno, Montserrat } from "next/font/google";
import Image from "next/image";

const david = David_Libre({
  subsets: ["vietnamese", "latin"],
  weight: "400",
});

const itali = Italianno({
  subsets: ["vietnamese", "latin"],
  weight: "400",
});

const mont = Montserrat({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});
export const Location = () => {
  return (
    <div
      style={{ backgroundSize: "10% auto" }}
      className="w-full relative bg-[url('/static/images/leaft_left.png')] bg-no-repeat bg-left-top"
    >
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
        <div className="w-1/2 px-4 flex flex-col justify-center items-center">
          <span
            className={clsx(
              "text-3xl uppercase text-[#0C4E93]",
              david.className
            )}
          >
            Viên ngọc khu nam sài gòn
          </span>
          <span
            className={clsx("text-[#BA6C1C] text-4xl py-3", itali.className)}
          >
            Cách Phú Mỹ Hưng 13.5 km
          </span>
          <p className="font-semibold text-black text-justify mb-6 mt-3 px-12">
            Sở hữu vị trí ôm trọng dòng sông rạch Đất Thánh, Elite Life hiện lên
            như một ốc đảo xanh an bình bên thành phố Hồ Chí Minh sôi động.
          </p>
          <div className="font-semibold text-black text-justify mb-6 px-12">
            <span>
              Dự án nằm tại Xã Long Hậu ,Huyện Cần Giuộc, Tỉnh Long An một trong
              những khu vực có tốc độ phát triển cơ sở hạ tầng bật nhất khi
              trong 1 năm vừa qua các tuyển cầu, đường bằng tổng 5 năm trước đó.
            </span>
            <br />
            <div className="mt-8">
              <span>
                Chỉ cần với 25 phút lái xe cư dân Elite Life đã có thể dễ dàng
                di chuyển về Quận 07 để làm việc và học tập. Và chỉ vài phút để
                di chuyển đến 3 phương thức di chuyển Cao Tốc, Sân Bay và đường
                Thuỷ.
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-4 border border-[#000] rounded ">
          <Image
            alt="location"
            src={location}
            className="object-cover rounded-xl"
            quality={100}
          />
        </div>
      </section>
      <div
        style={{ backgroundSize: "10% auto" }}
        className="w-full bg-[url(/static/images/leaft_right.png)] bg-right-top bg-no-repeat relative"
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url(/static/images/leaft_right.png)] bg-no-repeat bg-right-top"></div> */}
        <section className="max-w-[1140px] mx-auto flex gap-8">
          <div className="w-2/3 px-4">
            <Image
              alt="location2"
              src={location2}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3 px-4 relative">
            <div className="pb-8 pt-16 px-3">
              <span
                className={clsx(
                  "text-3xl uppercase text-[#FF860D] font-bold leading-relaxed",
                  mont.className
                )}
              >
                những tiện ích tiêu biểu
              </span>
            </div>
            <div className="bg-transparent bg-gradient-to-b from-[#D4B6A442] to-[#CFCFCF47] flex w-full rounded-xl">
              {/* Items */}
              <ol className="flex flex-col justify-center items-center w-full h-full px-4 py-2">
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    1. Trung tâm thương mại
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    2. Nhà hàng tiệc cưới
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    3. Trường mẫu giáo
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    4. Bến thuyền
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    5. Phòng Gym & sân thể thao đa năng
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    6. Khu thả diều & BBQ
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    7. Đồng cỏ lau
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    8. Hồ bơi nội khu
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    9. Công viên ven sông
                  </span>
                </li>
                <li className="my-1 px-5 py-3 bg-[#D2D0C978] rounded-lg w-full hover:bg-[#cab77d] cursor-pointer">
                  <span className="font-semibold text-[#316B7B]">
                    10. Vườn bốn mùa
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

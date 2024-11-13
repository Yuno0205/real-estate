import clsx from "clsx";
import { Carattere, David_Libre } from "next/font/google";

const caratere = Carattere({
  subsets: ["vietnamese", "latin"],
  weight: "400",
});

const david = David_Libre({
  subsets: ["vietnamese"],
  weight: "400",
});
export const Feature = () => {
  return (
    <>
      <div
        style={{ backgroundSize: "10% auto" }}
        className="w-full pb-[110px] pt-[250px]  xs:pb-[50px] justify-center bg-[#F7F7F7] bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat"
      >
        <div className="flex w-2/3 flex-col mx-auto gap-2 xs:w-full px-4">
          <span className="text-2xl leading-8 text-[#395F2E] text-center font-semibold">
            NHÀ SÁNG LẬP ELITE LIFE KIẾN TẠO NHỮNG NGÔI NHÀ
          </span>
          <h5 className="text-start pl-16 md:pl-4">
            <span className="text-[#395F5C] text-3xl">Không chỉ </span>
            <span className="text-[#FF860D] text-3xl font-bold">
              sống thư giãn và tiện nghi
            </span>
          </h5>
          <h5 className="text-end pr-16 md:pr-4">
            <span className="text-[#395F5C] text-3xl">mà còn </span>
            <span className="text-[#FF860D] text-3xl font-semibold">
              sống vượt trội và khác biệt
            </span>
          </h5>

          <div className="mt-4 mb-6">
            <p className={clsx(caratere.className, "text-2xl text-[#0D4478]")}>
              Khoảng xanh rộng lớn bao quanh cùng địa hình một mặt giáp sông,
              bên sông lại và công viên cây xanh nhưng còn giữ tự nhiên lên lỏi
              cho Elite Life tạo một vùng khí hậu hoàn hảo, vừa có bóng mặt che
              chở, vừa giữ độ ẩm lý tưởng.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F7F7F7] pb-[160px] xs:pb-[100px]">
        <div className="flex max-w-[1140px] mx-auto md:flex-wrap gap-4 justify-center px-4">
          <div className="p-14 flex flex-col xs:w-full md:w-2/5 w-1/3 bg-white rounded-xl">
            <div className="mb-8">
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
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </div>
            <span
              className={clsx(
                david.className,
                "tracking-widest text-justify pb-3"
              )}
            >
              Khoảng xanh rộng lớn bao quanh cùng địa hình một mặt giáp sông,
              bên sông lại và công viên cây xanh nhưng cơn gió tự nhiên len lỏi
              cho Elite Life tạo một vùng khí hậu hoàn hảo, vừa có bóng mát che
              chở, vừa giữ độ ẩm lý tưởng.
            </span>
          </div>
          <div className="p-14 flex flex-col xs:w-full md:w-2/5 w-1/3 bg-white rounded-xl">
            <div className="mb-8">
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
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <span
              className={clsx(
                david.className,
                "tracking-widest text-justify pb-3"
              )}
            >
              Thay cho hàng rào ngăn cách, cư dân trong khu compound Elite Life
              chuồng &quot;rào xanh&quot; bằng cây cối, tạo thành ranh giới tự
              nhiên vừa đủ riêng tư, vừa đủ để kết nối với xóm giềng.
            </span>
          </div>
          <div className="p-14 flex flex-col xs:w-full md:w-2/5 w-1/3 bg-white rounded-xl">
            <div className="mb-8">
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
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </div>
            <span
              className={clsx(
                david.className,
                "tracking-widest text-justify pb-3"
              )}
            >
              Không chỉ mở rộng diện tích phủ xanh, Elite Life còn làm dày thêm
              khoảng xanh bằng việc giữ lại nét riêng với rạn đùa nước bên sông
              dan xen với cây xanh, đem lại cảnh vật thiên nhiên tự nhiên.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

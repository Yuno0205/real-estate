import { Roboto, Arsenal } from "next/font/google";
import clsx from "clsx";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const arsenal = Arsenal({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
export default function Banner() {
  return (
    <section
      style={{
        backgroundImage: "url(/static/images/bg-rs.jpg)",
      }}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat object-cover w-full"
    >
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="z-2 absolute bottom-0 left-0 right-0 top-0 h-full w-full opacity-25 transition-all duration-300"
      ></div>

      <div className="absolute bottom-[-1px] left-0 w-full rotate-180 overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          color="#D4FEC8"
          fill="currentColor"
          height={54}
          className="w-full"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div>

      {/* Main banner */}
      <div className="align-content: center mx-auto flex min-h-[1100px] w-full max-w-[1140px] items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center h-full px-4">
          <div className=" z-9 min-h-[450px] xs:w-full w-2/3 mx-auto">
            <div
              style={{ backgroundImage: "url(/static/images/leaft_left.png)" }}
              className="flex rounded-md bg-[#152624E6] bg-[length:34%_auto] bg-bottom bg-left bg-no-repeat p-[5rem] text-center transition-all duration-300"
            >
              {/* Content banner */}
              <div className={clsx("w-full text-center", roboto.className)}>
                <div className="mx-auto mb-[30px]">
                  <span
                    className={clsx(
                      roboto.className,
                      "text-4xl tracking-[3px] text-[#E7DCD8]"
                    )}
                  >
                    ELITE LIFE
                  </span>
                </div>

                <div className="mx-auto mb-[30px]">
                  <h1
                    className={clsx(
                      roboto.className,
                      "text-7xl font-semibold tracking-[-3px] text-transparent"
                    )}
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #37B9D9 0%, #CAC4C5 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textTransform: "uppercase",
                    }}
                  >
                    <span className="pt-2 leading-10 text-6xl"> Chuẩn cho</span>
                    <br />
                    <span className="pt-2 leading-10 text-6xl">
                      cuộc sống ưu tú
                    </span>
                  </h1>
                </div>

                <div className="border-b-[1px] border-l-0 border-r-0 border-t-[1px] border-solid border-[rgba(255,255,255,0.1)] py-[15px] transition-all duration-300 h-[70px]">
                  {/* <span className="text-3xl font-medium tracking-wider text-[#F6F3F2]">
                    ĐẦU TIÊN TẠI VIỆT NAM
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5 relative cursor-pointer">
            <div className="flex items-center gap-2 bg-[#ED7856] px-10 py-4 cursor-pointer">
              <span
                className={clsx(
                  arsenal.className,
                  "text-sm font-semibold uppercase text-white cursor-pointer"
                )}
              >
                Đăng ký tư vấn
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
                color="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

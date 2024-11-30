import { fetchContentfulData } from "@/lib/contentful";
import clsx from "clsx";
import { Arsenal, Pinyon_Script, Roboto } from "next/font/google";
import Image from "next/image";

const arsenal = Arsenal({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
export default async function Overall() {
  const res = await fetchContentfulData("overal");
  const data = res.items[0].fields as any;
  console.log(data);

  return (
    <div className="w-full">
      <div className="py-[60px] bg-[#DFFDE8]">
        <div className="text-center gap-2 flex flex-col">
          <h2
            className={clsx(
              "text-6xl uppercase text-[#2065AD]",
              arsenal.className
            )}
          >
            {data.title1}
          </h2>
          <span
            className={clsx("text-6xl mt-3 text-[#3F737B]", pinyon.className)}
          >
            {data.title2}
          </span>
        </div>
      </div>

      <div className="w-full bg-[#DFFDE8E5]">
        <div className="flex xs:flex-col w-full max-w-[1140px] mx-auto xs:gap-10">
          {data.slides.map((item: any, index: number) => (
            <div className="w-1/3 px-4 xs:w-full" key={index}>
              <div className="w-full">
                <Image
                  src={`https:${item.fields?.file?.url}`}
                  alt="overall"
                  className="object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <span className="py-[5px] px-4 mb-5 text-white bg-[#115475] font-semibold">
                {item.fields?.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="pt-[60px] pb-[80px] relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#DFFDE8E5] to-[#F3F3F3] pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full bg-[url('/static/images/leaft_right.png')] bg-right-bottom bg-no-repeat bg-[20%_auto] opacity-50 pointer-events-none"></div>

        <div className="relative flex z-2 md:flex-col md:px-4">
          <div className="w-3/4 object-cover md:w-full relative">
            <Image
              src={`https:${data.mainImage.fields?.file?.url}`}
              fill
              alt={data.mainImage.fields?.title}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="w-1/4 flex md:w-full">
            <div className="w-full h-full bg-[url('/static/images/leaft_right.png')] bg-right-top bg-no-repeat bg-[56%_auto] px-5 flex flex-col relative justify-center">
              <div className="mb-5">
                <h5 className="text-left">
                  <span
                    className={clsx(
                      "text-[#286278] font-bold text-5xl",
                      arsenal.className
                    )}
                  >
                    {data.textbold1}{" "}
                  </span>
                  <span
                    className={clsx(
                      "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-3xl",
                      arsenal.className
                    )}
                  >
                    BÊN CẠNH SÔNG NƯỚC
                    <br />
                    <div className="w-full text-end">
                      <span
                        className={clsx(
                          "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-3xl",
                          arsenal.className
                        )}
                      >
                        THƠ MỘNG
                      </span>
                    </div>
                  </span>
                </h5>
              </div>

              <div>
                <h5 className="text-left mt-6 mb-11">
                  <span
                    className={clsx(
                      "text-[#286278] font-semibold text-4xl",
                      roboto.className
                    )}
                  >
                    {data.textbold2}
                    <sup className="text-[#30676E] text-3xl">2</sup>
                  </span>
                  <span
                    className={clsx(
                      "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-xl uppercase pl-2",
                      arsenal.className
                    )}
                  >
                    Cây xanh, công viên
                    <br />
                    <div className="w-full text-end">
                      <span
                        className={clsx(
                          "text-transparent bg-clip-text bg-gradient-to-b from-[#1C4370] to-[#86A5AB] text-xl uppercase ",
                          arsenal.className
                        )}
                      >
                        Bên sông
                      </span>
                    </div>
                  </span>
                </h5>
              </div>

              <ol
                className={clsx(
                  "list-decimal list-inside text-left text-[#2B5169] font-semibold",
                  arsenal.className
                )}
              >
                {data.highlight.map((item: any, index: number) => (
                  <li
                    className="pl-2.5 py-2 rounded-xl hover:bg-[#9edbde]"
                    key={index}
                  >
                    <span>{item.key} </span>
                    <span
                      className={clsx(
                        "text-[#D67627] text-lg",
                        roboto.className
                      )}
                    >
                      {" "}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

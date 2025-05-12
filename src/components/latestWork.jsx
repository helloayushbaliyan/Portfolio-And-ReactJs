import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function LatestWork(props) {
  const textCard = [
    {
      preHeading: "Portfolio",
      title: "Latest Work",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem] text-white   2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
      profileSrc: "",
    },
  ];
  const work = [
    {
      title: "Show All",
      sucess: 14,
    },
    {
      title: "Design",
      sucess: 6,
    },
    {
      title: "Branding",
      sucess: 4,
    },
    {
      title: "Illustration",
      sucess: 3,
    },
    {
      title: "Motion",
      sucess: 1,
    },
  ];

  const lists = [
    {
      title: "Design",
      subtitle: "SOFA",
      src: "/images/work_img_1.png",
      id: 1,
    },
    {
      title: "Branding",
      subtitle: "KeyBoard",
      src: "/images/work_img_2.png",
      id: 2,
    },
    {
      title: "Illustration",
      subtitle: "Work Media",
      src: "/images/work_img_3.png",
      id: 3,
    },
    {
      title: "Motion",
      subtitle: "DDDone",
      src: "/images/work_img_4.png",
      id: 4,
    },
    {
      title: "Design",
      subtitle: "Abstract",
      src: "/images/work_img_5.png",
      id: 5,
    },
    {
      title: "Branding",
      subtitle: "HandP",
      src: "/images/work_img_6.png",
      id: 6,
    },
  ];
  return (
    <>
      <div className="bg-[#28293e] mt-[6rem]">
        <div className="  px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem]  py-[5rem] space-y-[5rem]">
          <div className=" font-[inter] text-center  ">
            <div className="">
              <div className="flex justify-center   ">
                <TextCard key={work.id} data={textCard[0]} />
              </div>
              <div className="hidden md:flex justify-center  space-x-12 mx-auto mt-8">
                {work.map((work) => (
                  <p is key={work.sucess} className=" relative text-[#91919b]">
                    {work.title}
                    <span className=" absolute top-[-16px] right-[-16px]">
                      {work.sucess}
                    </span>
                  </p>
                ))}
              </div>
              <select
                className="w-full bg-white outline-0 rounded-xl text-xl py-4 px-2 md:hidden"
                name=""
                id=""
              >
                {work.map((work) => (
                  <option
                    is
                    key={work.sucess}
                    className="text-xl py-4 px-2  text-[#91919b]"
                  >
                    {work.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className=" relative ">
            <div className="   grid sm:grid-cols-2 lg:grid-cols-3 w-full 2xl:gap-[2rem] gap-6">
              {lists.map((list) => (
                <div className="w-[100%] relative ">
                  <img
                    className="w-full h-[24rem] object-cover 2xl:h-[33rem] rounded-md"
                    src={list.src}
                    alt=""
                  />
                  <div className=" absolute bottom-[3.5rem] left-[3rem] space-y-4">
                    <button className="text-sm bg-white px-4 py-1.5 font-medium rounded-3xl">
                      {list.title}
                    </button>
                    <h1 className="text-white font-bold text-4xl">
                      {list.subtitle}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <WhiteBtn btntxt="Explore More" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

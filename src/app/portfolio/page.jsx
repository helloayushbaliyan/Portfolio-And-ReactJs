import React from "react";
import Hero from "../../components/hero";
import SuccesAchived from "../../components/succesAchived";
import WhiteBtn from "../../components/whiteBtn";
import Subfooter from "../../components/subfooter";
import { useState } from "react";

export default function PortfolioPage(props) {
  const herodata = {
    title: "Portfolio",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };

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

  const [load, setload] = useState(6);
  const loadmore = () => {
    setload(load + 3);
    console.log(load);
  };

  return (
    <>
      <Hero data={herodata} />
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem]">
        <SuccesAchived />

        <div className="mt-[4rem]">
          <div className="   grid sm:grid-cols-2 lg:grid-cols-3 w-full 2xl:gap-[2rem] gap-6">
            {lists.splice(0, load).map((list) => (
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
        </div>
        <div onClick={loadmore} className="flex justify-center mt-5">
          <WhiteBtn btntxt="Looad More" />
        </div>

        <div className="mt-[4rem]">
          <Subfooter />
        </div>
      </div>
    </>
  );
}

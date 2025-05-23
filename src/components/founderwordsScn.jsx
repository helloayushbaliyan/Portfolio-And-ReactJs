import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function FounderwordsScn(props) {
  const textCard = {
    preHeading: "Founder Words",
    title:
      "An Digital agency is a business you hire to outsource your digital marketing efforts",
    subHeading: "",
    description: "",
    textSize:
      "text-[2.2rem]    lg:text-[{3rem}] xl:text-[2.6rem]  2xl:text-[3rem] text-white leading-[3.2rem] 2xl:leading-[4rem] md:leading-[3.2rem]",
  };

  return (
    <>
      <div className="grid md:grid-cols-2 py-10 pt-20   gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
        <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
          <img
            className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
            src="/images/founder.png"
            alt=""
          />
        </div>
        <div className="max-w-[80rem mt-5">
          <div className="  relative">
            <TextCard data={textCard} />
            <img
              className=" absolute hidden md:block top-0 right-0 "
              src="/images/colan.png"
              alt=""
            />
            <div className="space-y-2 text-white">
              <h1 className="text-[22px]">Ren Delan</h1>
              <h1 className="text-sm">Ren Delan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

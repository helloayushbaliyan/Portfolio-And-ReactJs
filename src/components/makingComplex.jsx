import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function MakingComplex(props) {
  const textCard = {
    preHeading: "Service",
    title: "Making Complex Digital Products",
    subHeading: "",
    description:
      "Agency provides a full service range including technical skills, design, business.",
    textSize:
      "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[4.5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[3.2rem]",
      profileSrc:"/images/profile_img.png",
      profileDescription:"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner.",
      profileName:"Jenny Murtaugh"
  };

  return (
    <>
      <div className="grid md:grid-cols-2 py-10 gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  mt-[7rem]">
        <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
          <img
            className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
            src="/images/making-complex-img.png"
            alt=""
          />
        </div>
        <div className="max-w-[80rem">
          <div className=" ">
            {/* <TextCard data={textCard[0]} />
            <WhiteBtn btntxt="About US" /> */}
            <TextCard data={textCard} />
            <WhiteBtn btntxt="Explore" />
          </div>
        </div>
      </div>
    </>
  );
}

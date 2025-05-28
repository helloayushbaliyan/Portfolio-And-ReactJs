import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function Helpcompanies(props) {
  const textCard = {
    preHeading: "Get Started",
    title: "We Help Companies Move Faster",
    subHeading: "",
    description: "",
    textSize:
      "text-[1.2rem]    lg:text-[{3rem}] xl:text-[1.5rem]  2xl:text-[1.8rem]  leading-[3.2rem] 2xl:leading-[2.5rem] md:leading-[2rem]",
  };
  return (
    <>
      <div className="bg-[#fdf0e8]  overflow-b  grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3  px-4 pt-10 md:px-[2rem]  rounded-xl">
        <div className="relative sm:py-10 pt-[2rem] sm:pt-0">
          <div className="absolute top-[-7rem] left-0">
            <div className=" relative flex justify-center items-center">
              <img
                className=" sale   w-[8rem]"
                src="/images/help_company.png"
                alt=""
              />
              <img
                className=" absolute w-[1.5rem]"
                src="/images/gift-icon.png"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <TextCard data={textCard} />
            <WhiteBtn btntxt="Contact US" />
          </div>
        </div>
        <div className=" w-full   sm:hidden lg:block sm:mt-5 mt-0 flex justify-center">
          <img
            className="object-contain w-[90%] "
            src="/images/help_company_2.png"
            alt=""
          />
        </div>
        <div className="relative ">
          <div className=" ">
            <div className="flex justify-center">
              <img
                className="  sm:absolute bottom-0 right-0   w-[14rem] "
                src="/images/help-company-3.png"
                alt=""
              />
              <img
                className="h-[13rem] mt-5  hidden sm:block"
                src="/images/cloud_img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

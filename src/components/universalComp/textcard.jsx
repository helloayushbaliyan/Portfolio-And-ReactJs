import React from "react";
import WhiteBtn from "./whiteBtn";

export default function Textcard({ data }) {
  return (
    <>
      <div className="">
        <div className="text-black order-last md:order-first relative ">
          <div className="space-y-5">
            <h3 className="text-xl text-[#965050]">ABOUT</h3>
            <div className=" relative flex">
              <span className="text-[2.2rem] z-[100] lg:text-[3rem] xl:text-[3.5rem] leading-[3.2rem] md:leading-[4.2rem] font-bold block relative">
                {data.title}
              </span>
            </div>
            <h4 className="text-xl">{data.subHeading}</h4>
            <p className="text-gray-400 text-[0.96rem] leading-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

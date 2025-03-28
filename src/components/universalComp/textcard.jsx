import React from "react";
import WhiteBtn from "./whiteBtn";

export default function Textcard({ data }) {
  return (
    <>
      <div className=" ">
        <div className="text-black order-last md:order-first relative ">
          <div className="space-y-5">
            <h3 className="text-[15px] text-[#e53737]">{data.preHeading}</h3>
            <div className=" relative flex">
              <span
                className={`${data.textSize}  font-bold block relative`}
              >
                {data.title}
              </span>
            </div>
            <h4 className="text-xl">{data.subHeading}</h4>
            <p className="text-gray-400 text-justify text-[0.96rem] leading-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

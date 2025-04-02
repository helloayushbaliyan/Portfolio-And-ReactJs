import React from "react";
import WhiteBtn from "./whiteBtn";

export default function Textcard({ data }) {
  return (
    <>
      <div className=" ">
        <div className="text-black order-last md:order-first relative ">
          <div className="space-y-5 sm:spy-3 2xl:space-y-8">
            <h3 className="text-[15px] 2xl:text-2xl text-[#e53737]">{data.preHeading}</h3>
            <div className=" relative flex">
              <span
                className={`${data.textSize}  font-bold block relative`}
              >
                {data.title}
              </span>
            </div>
            <h4 className="text-xl  2xl:text-[2.3rem]">{data.subHeading}</h4>
            <p className="text-slate-600 text-justify  text-[1rem] 2xl:text-[1.5rem]  2xl:leading-9  leading-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

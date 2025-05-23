import React, { useEffect } from "react";
import WhiteBtn from "./whiteBtn";

export default function TextCard({ data, block }) {

  return (
    <>
      <div className=" ">
        <div className="text-black order-last md:order-first relative ">
          <div className="space-y-5 sm:spy-3 2xl:space-y-8">
            <h3 className="text-[21px] font-[500] 2xl:text-2xl text-[#e53737]">
              {data.preHeading}
            </h3>
            <div className=" relative flex">
              <span className={`${data.textSize}  font-bold block relative z-0`}>
                {data.title} <br className="" /> {data.title2}
              </span>
            </div>
            <h4 className="text-xl  2xl:text-[2.3rem]">{data.subHeading}</h4>
            <p className="text-slate-600 text-justify  text-[1rem] 2xl:text-[1.5rem]  2xl:leading-9  leading-6">
              {data.description}
            </p>

            <div id="profile-scn" style={{display:"none"}} className={`${block}`}>
              <div className="flex  gap-2 sm:gap-10 relative">
                <div className=" ">
                  <img className="w-[6rem] " src={data.profileSrc} alt="" />
                </div>
                <div className="">
                  <p className="text-gray-400 text-[0.96rem] 2xl:text-[1rem] leading-6">
                    {data.profileDescription}
                  </p>
                  <button className="mt-6">{data.profileName}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

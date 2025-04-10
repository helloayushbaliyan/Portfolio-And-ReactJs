import React from "react";
import "../../App.css";
export default function FeaturesCard({ addimg }) {
  return (
    <>
      <div className=" relative flex items-center">
        <div className="bg-white absolute px-9 pt-8 pb-12 space-y-7 border-2 border-[#f0e1d7]">
          <div className="">
            <div className=" ">
              <div className="bg-[#ef6d57] w-[4.5rem] h-[4.5rem] flex justify-center items-center  rounded-full">
                <img className="w-7" src="/images/profesional-svg.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-2xl font-bold">Professional</h1>
            <p className="text-[16px] leading-8 text-[#8c817b]">
              Full service range including technical skills, design.
            </p>
          </div>
        </div>
        F
      </div>
    </>
  );
}

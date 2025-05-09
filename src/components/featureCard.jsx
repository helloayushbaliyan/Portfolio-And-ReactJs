import React from "react";
// import "../../App.css";
export default function FeaturesCard({ data }) {
  return (
    <>
      <div className=" relative flex items-center">
        <div className="hover:bg-white w-full   px-9 md:px-5 lg:px-12 py-14 2xl:pb-[4rem] space-y-7 2xl:space-y-[3.5rem] border-2 border-[#f0e1d7]">
          <div className="">
            <div className=" ">
              <div className="bg-[#ef6d57] w-[4.5rem] h-[4.5rem] 2xl:w-[6rem]  2xl:h-[6rem]  flex justify-center items-center  rounded-full">
                <img className="w-7 2xl:w-9" src="/images/profesional-svg.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" space-y-4 2xl:space-y-8">
            <h1 className=" text-2xl font-bold 2xl:text-3xl">{data.title}</h1>
            <p className="text-[16px] leading-8 2xl:text-[21px] text-[#b5a399] line-clamp-2">
            {data.description}
            </p>
            <button className="2xl:text-xl font-[400]">{data.buttonText}</button>
          </div>
        </div>
        
      </div>
    </>
  );
}

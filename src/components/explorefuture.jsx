import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function Explorefuture({ data }) {
  return (
    <>
      <div className="border-2 w-full border-[#3a3c56] text-white px-10 pt-6 pb-9">
        <div className="border-b-2 border-b-[#3a3c56] pb-9">
          <div className="flex space-x-3">
            <h1 className=" text-[4.5rem] font-bold">{data.day}</h1>
            <h1 className="text-[21px] mt-7 font-bold">
              {data.month} <br /> {data.year}
            </h1>
          </div>
          <div className="flex space-x-3">
            <img className="w-5  mt-0.5  h-5" src="/images/clock.png" alt="" />
            <p>{data.time}</p>
          </div>
        </div>
        <div className="space-y-4 mt-9">
          <h1 className="text-2xl font-[600]">{data.title}</h1>
          <p className="text-[#b1b2b9] text-[14.5px] text-justify leading-8 line-clamp-2 2xl:line-clamp-1">
            {data.description}
          </p>
          <button className="text-md">Explore More</button>
        </div>
      </div>
    </>
  );
}

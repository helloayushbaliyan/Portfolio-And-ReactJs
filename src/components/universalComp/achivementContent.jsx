import React from "react";

export default function AchivementContent({ data }) {
  return (
    <>
      <div className=" w-full text-start border-2 space-y-6 px-7 sm:px-2 md:px-8 py-9 border-[#f8e4d8]">
        <h1 className="text-4xl font-bold">
          {data.value}
          {data.symbol}
        </h1>
        <h4 className="text-xl  tracking-wider   ">{data.discription}</h4>{" "}
      </div>
    </>
  );
}

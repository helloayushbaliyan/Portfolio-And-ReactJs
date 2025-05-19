import React from "react";

export default function Hero({ data }) {
  return (
    <>
      <div className="bg-[#28293e] text-white text-center py-[4rem] space-y-3 font-[inter]">
        <h1 className="text-[3rem] sm:text-[4rem] font-bold">{data.title}</h1>
        <p className="text-[15px] leading-8 text-gray-400">
          Agency provides a full service range including technical skills,
          design, <br className="hidden sm:block" /> business understanding.
        </p>
      </div>
    </>
  );
}

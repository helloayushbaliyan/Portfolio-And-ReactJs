import React from "react";

export default function WhiteBtn({btntxt}) {
  return (
    <>
      <div className=" text-[17px] mt-10 text-[#ffffff] flex gap-2">
        <button className="active:bg-[#ee6d58] bg-[#ffffff] duration-300 px-6 py-[0.8rem] font-bold text-black rounded-md shadow-2xl">{btntxt}</button>
      </div>
    </>
  );
}

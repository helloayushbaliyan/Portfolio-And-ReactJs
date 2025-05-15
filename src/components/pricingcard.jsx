import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function Pricingcard({ pricedata }) {
  return (
    <>
      <div className="w-full border-2 border-collapse border-[#f3d1bf] py-8 px-10 space-y-3">
        <h3 className="text-[21px] font-[500] 2xl:text-2xl text-[#e53737]">
          {pricedata.subscriptioTitle}
        </h3>
        <div className="  flex">
          <span
            className={`text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[2.8rem]    2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem] font-bold block relative`}
          >
            {pricedata.pricing}
          </span>
        </div>
        <h1 className=" leading-[2rem] text-[15px]">{pricedata.description}</h1>
        <ul className="text-[15px]">
          <li className="flex space-x-4 space-y-6">
            <span>
              <img src="/images/add.png" alt="" />
            </span>
            <span>{pricedata.benifits_1}</span>
          </li>
          <li className="flex space-x-4 space-y-6">
            <span>
              <img src="/images/add.png" alt="" />
            </span>
            <span>{pricedata.benifits_2}</span>
          </li>
          <li className="flex space-x-4 space-y-6">
            <span>
              <img src="/images/add.png" alt="" />
            </span>
            <span>{pricedata.benifits_3}</span>
          </li>
        </ul>
        <div className="">
          <WhiteBtn btntxt="Contact US" />
        </div>
      </div>
    </>
  );
}

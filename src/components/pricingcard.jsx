import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";

export default function Pricingcard({ pricedata }) {
  return (
    <>
      <div className="  border-1 hover:bg-white transition duration-200 border-collapse border-[#f3d1bf] py-8 px-5 sm:px-10 md:px-4 lg:px-10 ">
        <div className="space-y-2">
          <button
            className={`${pricedata.display} text-white bg-[#ef6d58] px-3 py-2 rounded-4xl`}
          >
            {pricedata.button}
          </button>

          <h3 className="text-[21px] font-[500] 2xl:text-2xl text-[#e53737]">
            {pricedata.subscriptioTitle}
          </h3>
          <div className="  flex">
            <span
              className={`text-[2.2rem]    lg:text-[{3rem}] xl:text-[2.4rem]    2xl:text-[3rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem] font-bold block relative`}
            >
              {pricedata.pricing}
            </span>
          </div>
          <h1 className=" leading-[2rem] text-[15px] 2xl:text-[20px] line-clamp-2">
            {pricedata.description}
          </h1>
          <ul className="text-[15px] 2xl:text-[20px]">
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
        </div>{" "}
      </div>
    </>
  );
}

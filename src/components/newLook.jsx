import React from "react";
import TextCard from "./textCard";

export default function NewLook(props) {
  const textCard = [
    {
      preHeading: "Features",
      title: "Give Your Site A New Look",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]    lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
    },
  ];
  const list = [
    {
      list_items: "Range including technical skills",
      id:1
    },
    {
      list_items: "Business understanding",
      id:2
    },
    {
      list_items: "Partner on the long run",
      id:3
    },
  ];


  return (
    <>
      <div className="grid md:grid-cols-2  pt-[8rem] gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
        <div className="max-w-[80rem] order-last md:order-first">
          <div className=" xl:mt-12  2xl:mt-0">
            <TextCard data={textCard[0]} />
            <ul className="space-y-4 mb-4 text-[#867165]">
              {list.map((item) => (
                <li key={item.id} className="flex space-x-6">
                  <div className="bg-[#ef6d57]  rounded-full">
                    <img className="w-7" src="/images/check.svg" alt="" />
                  </div>
                  <span>{item.list_items}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <h1 className="text-[21px] font-normal">
                Service range including technical skills, design, business
                understanding.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
          <img
            className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
            src="/images/new-look-img.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

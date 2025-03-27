import React from "react";
import BrandColabScn from "./brand-colab-scn";
import Textcard from "../universalComp/textcard";
import WhiteBtn from "../universalComp/whiteBtn";
export default function Body(props) {
  const textCard = [
    {
      title: "An Experience Design Agency",
      subHeading: "Provides a full service range",
      description:
        "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
      btnText: "ABOUT US",
    },
  ];
  return (
    <>
      <BrandColabScn />

      <div className="grid md:grid-cols-2 py-10 gap-9 lg:gap-0  px-4 md:px-[3rem] xl:px-[7.5rem]">
        <div className="flex justify-center md:justify-start  items-center  max-w-[80rem]">
          <img
            className="w-full object-contain sm:max-w-[550px]    2xl:max-w-[500px]"
            src="/images/design-agency.png"
            alt=""
          />
        </div>
        <div className="max-w-[80rem">
          <div className=" lg:ml-[7rem] lg:mt-[4rem]">
            <Textcard data={textCard[0]} />
            <WhiteBtn btntxt="About US" />

          </div>
        </div>
      </div>
    </>
  );
}

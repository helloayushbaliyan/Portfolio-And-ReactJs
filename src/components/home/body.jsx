import React from "react";
import BrandColabScn from "./brand-colab-scn";
import Textcard from "../universalComp/textcard";
import WhiteBtn from "../universalComp/whiteBtn";
import Achivements from "../universalComp/achivements";
import LookAwesomeScn from "../universalComp/lookAwesomeScn";
export default function Body(props) {
  const textCard = [
    {
      preHeading: "ABOUT",
      title: "An Experience Design Agency",
      subHeading: "Provides a full service range",
      description:
        "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem] leading-[3.2rem] md:leading-[4.2rem]",
    },
    ,
  ];
  return (
    <>
      {/* brand section start */}
      <BrandColabScn />
      {/* brand section ends */}

      {/*here Design Agency section start */}
      <div className="grid md:grid-cols-2 py-10 gap-9 lg:gap-[8rem]  px-4 md:px-[3rem] xl:px-[7.5rem]">
        <div className="flex justify-center md:justify-start  items-center  max-w-[80rem]">
          <img
            className="w-full object-contain sm:max-w-[550px]    2xl:max-w-[500px]"
            src="/images/design-agency.png"
            alt=""
          />
        </div>
        <div className="max-w-[80rem">
          <div className=" ">
            <Textcard data={textCard[0]} />
            <WhiteBtn btntxt="About US" />
          </div>
        </div>
        {/*here Design Agency section close */}
      </div>

      {/* achivements section start */}
      <div className="px-4 md:px-[3rem] xl:px-[7.5rem]">
        <Achivements />
      </div>
      {/* achivements section end */}

      {/*here Design Agency section start */}
      <div className="">
        <LookAwesomeScn />
      </div>
    </>
  );
}

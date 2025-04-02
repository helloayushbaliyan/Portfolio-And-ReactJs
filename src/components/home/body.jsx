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
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
    },
    ,
  ];
  return (
    <>
      {/* brand section start */}
      <BrandColabScn />
      {/* brand section ends */}

      {/*here Design Agency section start */}
      <div className="grid md:grid-cols-2 py-10 gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
        <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
          <img
            className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
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
      <div className="">
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

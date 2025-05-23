import React from "react";
import TextCard from "./textCard";
import WhiteBtn from "./whiteBtn";
import { Link } from "react-router-dom";

export default function ExperienceDesignScn(props) {
  const textCard = {
    preHeading: "ABOUT",
    title: "An Experience Design Agency",
    subHeading: "Provides a full service range",
    description:
      "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
    textSize:
      "text-[2.2rem]   lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[4.5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[3.2rem]",
  };

  return (
    <>
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
            {/* <TextCard data={textCard[0]} />
            <WhiteBtn btntxt="About US" /> */}
            <TextCard data={textCard} />
            <Link to="/about">
              <WhiteBtn btntxt="About US" />
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

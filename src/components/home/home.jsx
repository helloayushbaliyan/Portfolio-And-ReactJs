import React from "react";
import HeroScn from "./hero-scn";
import BrandColabScn from "./brand-colab-scn";
import Body from "./body";

export default function Home(props) {
  return (
    <>
      <HeroScn />
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mb-[20rem]">
        <Body />
      </div>
    </>
  );
}

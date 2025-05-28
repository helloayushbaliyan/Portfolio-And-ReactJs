import React from "react";
import Heroscn from "../components/heroscn";
import Brandcolab from "../components/brandcolab";
import ExperienceDesignScn from "../components/experienceDesignScn";
import AchivementsScn from "../components/achivementsScn";
import MakeYourProject from "../components/makeYourProject";
import VideoReel from "../components/videoReel";
import NewLook from "../components/newLook";
import FeaturesScn from "../components/featuresScn";
import MakingComplex from "../components/makingComplex";
import OurAgency from "../components/ourAgency";
import LatestWork from "../components/latestWork";
import Clientsaying from "../components/clientsaying";
import Pricingplans from "../components/pricingplans";
import Faqscn from "../components/faqscn";
import Subfooter from "../components/subfooter";

export default function Homepage(props) {
  return (
    <>
    
      <Heroscn />

      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] ">
        <Brandcolab />
        <ExperienceDesignScn />
        <AchivementsScn />
        <div className="border-b-3 border-[#f8e4d8] pb-[3rem]">
          <MakeYourProject />
        </div>
        <VideoReel />
        <NewLook />
        <FeaturesScn />
        <MakingComplex />
        <OurAgency />
      </div>
      <div className="">
        <LatestWork />
      </div>
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem]  ">
        <Clientsaying />
        <Pricingplans />
        <Faqscn />
        <div className="mt-[8rem]">
          <Subfooter />{" "}
        </div>
      </div>
    </>
  );
}

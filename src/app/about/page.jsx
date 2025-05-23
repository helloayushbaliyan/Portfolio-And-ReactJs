import React from "react";
import Hero from "../../components/hero";
import ExperienceDesignScn from "../../components/experienceDesignScn";
import TextCard from "../../components/textCard";
import FeaturesScn from "../../components/featuresScn";
import Achivements from "../../components/achivementsScn";
import VideoReel from "../../components/videoReel";
import Teamof from "../../components/teamof";
import Faqscn from "../../components/faqscn";
import Brandcolab from "../../components/brandcolab";
import Subfooter from "../../components/subfooter";

export default function AboutPage(props) {
  const herodata = {
    title: "About Us",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };

  const textCard = {
    preHeading: "ABOUT",
    title: "An Experience Design Agency",
    subHeading: "",
    description: " ",
    textSize:
      "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[4.5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[3.2rem]",
  };

  return (
    <>
      <Hero data={herodata} />
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem]">
        <div className="grid  md:grid-cols-2">
          <TextCard data={textCard} />
          <div className="mt-[3rem] space-y-5 text-slate-600 leading-8 text-justify">
            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>
        </div>
        <VideoReel />
        <FeaturesScn />

        <Achivements />
      </div>

      <div className="">
        <div className="bg-[#28293e] mt-[6rem] w-full box-border text-white">
          <div className="  px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem]  py-[5rem] space-y-[5rem]">
            <Teamof />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem]">
        
        <Brandcolab/>
        <Subfooter/>
      </div>
    </>
  );
}

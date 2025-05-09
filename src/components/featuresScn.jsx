import React from "react";
import FeaturesCard from "./featureCard";
import TextCard from "./textCard";

export default function FeaturesScn(props) {
  const textCard = [
    {
      preHeading: "Features",
      title: "",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
    },
  ];

  const help_list = [
    {
      title: "Professional",
      description:
        "Full service range including technical skills, design.",
      buttonText: "",
    },
    {
      title: "Accessibility",
      description:
        "Agency Business understanding, ability to put themselves.",
      buttonText: "",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-[0.6fr_1fr] gap-9 lg:gap-[7rem] 2xl:gap-[9rem]  pt-[8rem]   ">
        <div className=" ">
          <div className=" xl:mt-12  2xl:mt-0">
            <TextCard data={textCard[0]} />

            <div className="space-y-6">
              <h1 className="text-[20px] md:text-[1rem] lg:text-[1.2rem] font-normal">
                Long run, and work as an extension <br /> of the merchant's
                team.
              </h1>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 gap-2 ">
          {help_list.map((item) => (
            <div className="">
              <FeaturesCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import TextCard from "./textCard";
import FeaturesCard from "./featureCard";

export default function OurAgency(props) {
  const textCard = [
    {
      preHeading: "Service",
      title: "How Our Agency ",
      title2: "Can Help",
      subHeading: "",
      description: "",
      textSize:
        "text-[2rem] 2xl:text-[3rem]    lg:text-[{3rem}] xl:text-[2.5rem] leading-[3.2rem] md:leading-[2.5rem]",
    },
  ];

  const help_list = [
    {
      title: "Design",
      description:
        "Agency provides a full service range including technical skills, design.",
      buttonText: "Learn More",
    },
    {
      title: "Development",
      description:
        "Full service range including technical skills, design, business.",
      buttonText: "Discover More",
    },
    {
      title: "Marketing",
      description:
        "Technical skills, design, business understanding, ability.",
      buttonText: "Explore Now",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 pt-10 gap-9 lg:gap-0   ">
        <div className=" flex justify-start   lg:max-w-[80%]">
          <div className="w-[full]">
            <TextCard data={textCard[0]} />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        {help_list.map((item) => (
          <div className="">
            <FeaturesCard  data={item}/>
          </div>
        ))}
      </div>
    </>
  );
}

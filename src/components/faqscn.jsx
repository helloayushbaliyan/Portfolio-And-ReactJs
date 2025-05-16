import React from "react";
import TextCard from "./textCard";
import FeaturesCard from "./featureCard";
import Faq from "./faq";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Faqscn(props) {
  const textCard = [
    {
      preHeading: "Faq",
      title: "Frequently Asked ",
      title2: "Questions",
      subHeading: "",
      description:
        "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.",
      textSize:
        "text-[2rem] 2xl:text-[3rem]  z-[100] lg:text-[{3rem}] xl:text-[2.5rem] leading-[3.2rem] md:leading-[2.5rem]",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-2 pt-10 gap-9 lg:gap-0   ">
        <div className=" flex justify-start   lg:max-w-[80%]">
          <div className="w-[full]">
            <TextCard data={textCard[0]} />
          </div>
        </div>
        <div className="">
          <Faq />
        </div>
      </div>
    </>
  );
}

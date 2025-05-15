import React from "react";
import TextCard from "./textCard";
import "../App.css"; // Make sure the path is correct
import WhiteBtn from "./whiteBtn";
import Pricingcard from "./pricingcard";

export default function Pricingplans(props) {
  const textCard = [
    {
      preHeading: "Pricing",
      title: "Check Our",
      title2: "Pricing Plans",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]    2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
      profileSrc: "",
    },
  ];

  const priceList = [
    {
      subscriptioTitle: "Consultation",
      pricing: "Free",
      description:
        "Your digital marketing efforts, instead of handling in-house.",
      benifits_1: "Brand Design",
      benifits_2: "Market Analysis",
      benifits_3: "Production",
    },
    {
      subscriptioTitle: "Design",
      pricing: "$1500",
      description:
        "Provide your business with a variety of digital solutions to promote.",
      benifits_1: "Brand Design",
      benifits_2: "Market Analysis",
      benifits_3: "Production",
    },
    {
      subscriptioTitle: "Design+Code",
      pricing: "$2900",
      description:
        "Your Help you hit your marketing goals and grow your business.",
      benifits_1: "Brand Design",
      benifits_2: "Market Analysis",
      benifits_3: "Production",
    },
  ];
  return (
    <>
      <div className=" font-[inter] my-[3rem]">
        <div className="">
          <div className="">
            <TextCard data={textCard[0]} />
          </div>
        </div>
        <div className="grid grid-cols-3">
          {priceList.map((price) => (
            <div className="">
              <Pricingcard pricedata={price} />
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

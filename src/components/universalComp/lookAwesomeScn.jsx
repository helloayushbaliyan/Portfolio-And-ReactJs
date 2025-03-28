import React from "react";
import Textcard from "./textcard";
import WhiteBtn from "./whiteBtn";

export default function LookAwesomeScn(props) {
  const textCard = [
    {
      preHeading: "How We Work",
      title: "Making Your Projects Look Awesome",
      subHeading: "",
      description:
        "Technical skills, design, business understanding, ability to put themselves in the merchant's shoes..",
      textSize:
        "text-[2rem]  z-[100] lg:text-[{3rem}] xl:text-[2.5rem] leading-[3.2rem] md:leading-[3.2rem]",
    },
  ];
  return (
    <>
      <div className=" md:flex  md:grid-cols-2 py-10 gap-9 lg:gap-[7rem]   px-4 md:px-[3rem] xl:px-[7.5rem]">
        <div className="  md:max-w-[50%] lg:max-w-[40%]">
          <div className="w-[full]">
            <Textcard data={textCard[0]} />
            <h1 className="mt-5">Read More</h1>
          </div>
        </div>
        <div className="mt-[2rem]">
          <div className=" mt-20 md:mt-0 space-y-2">
            <div className="flex gap-10  items-center">
              <h1 className="text-[4.3rem] font-bold">1</h1>
              <h2 className=" text-xl lg:text-2xl font-bold">
                Full service range including
              </h2>
            </div>
            <div className="flex gap-10  items-center">
              <h1 className="text-[4.3rem] font-bold">2</h1>
              <h2 className=" text-xl lg:text-2xl font-bold">
                Technical skills, design, business{" "}
              </h2>
            </div>
            <div className="flex gap-10  items-center">
              <h1 className="text-[4.3rem] font-bold">3</h1>
              <h2 className=" text-xl lg:text-2xl font-bold">
                Themselves in the merchant's{" "}
              </h2>
            </div>
          </div>
        </div>

        {/*here Design Agency section close */}
      </div>
    </>
  );
}

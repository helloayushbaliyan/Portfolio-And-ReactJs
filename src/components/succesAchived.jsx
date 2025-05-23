import React from "react";

export default function SuccesAchived(props) {
  const work = [
    {
      title: "Show All",
      sucess: 14,
    },
    {
      title: "Design",
      sucess: 6,
    },
    {
      title: "Branding",
      sucess: 4,
    },
    {
      title: "Illustration",
      sucess: 3,
    },
    {
      title: "Motion",
      sucess: 1,
    },
  ];


  return (
    <>
      <div className="hidden md:flex justify-center  space-x-12 mx-auto mt-8">
        {work.map((work) => (
          <p is key={work.sucess} className=" relative text-[#91919b]">
            {work.title}
            <span className=" absolute top-[-16px] right-[-16px]">
              {work.sucess}
            </span>
          </p>
        ))}
      </div>
    </>
  );
}

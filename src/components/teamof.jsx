import React from "react";
import TextCard from "./textCard";

export default function Teamof(props) {
  const textCard = [
    {
      preHeading: "Our Team",
      title: "Team of Designers",
      title2: " and Developers",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem] text-white  2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
    },
  ];
  const teamList = [
    {
      src: "/images/team_1.png",
      title_name: "Azah Anyeni",
      field: "Designer",
    },
    {
      src: "/images/team_2.png",
      title_name: "Roelof Bekkenenks",
      field: "React Developer",
    },
    {
      src: "/images/team_3.png",
      title_name: "Leonardo Oliveira",
      field: "Illustrator",
    },
    {
      src: "/images/team_4.png",
      title_name: "Izabella Tabakova",
      field: "Product Designer",
    },
    {
      src: "/images/team_1.png",
      title_name: "Azah Anyeni",
      field: "Designer",
    },
    {
      src: "/images/team_2.png",
      title_name: "Roelof Bekkenenks",
      field: "React Developer",
    },
    {
      src: "/images/team_3.png",
      title_name: "Leonardo Oliveira",
      field: "Illustrator",
    },
    {
      src: "/images/team_4.png",
      title_name: "Izabella Tabakova",
      field: "Product Designer",
    },

  ];

  const previousBtn = () => {
    const scroll = document.querySelector(".wheel");
    scroll.scrollLeft -= 1105;
    scroll.style.scrollBehavior = "smooth";
    const addcolor = document.querySelector(".second");
    addcolor.classList.remove("bg-[#ef6d58]");
    const removecolor = document.querySelector(".first");
    removecolor.classList.add("bg-[#ef6d58]");
  };

  const nextBtn = () => {
    const scroll = document.querySelector(".wheel");
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 1105;
    const color = document.querySelector(".second");
    color.classList.add("bg-[#ef6d58]");
    const removecolor = document.querySelector(".first");
    removecolor.classList.remove("bg-[#ef6d58]");
  };

  return (
    <>
      <div className="  ">
        <div className="flex justify-between">
          <div className=" ">
            <TextCard data={textCard[0]} />
          </div>
          <div className="hidden lg:flex items-center mt-[5rem] gap-3">
            <button
              onClick={previousBtn}
              className="border-2 border-slate-500  w-12 h-12 flex justify-center hover:scale-110  transition duration-200 rounded-full"
            >
              <img className="w-6 " src="/images/arrow.svg" alt="" />
            </button>

            <button
              onClick={nextBtn}
              className="border-2 border-slate-500  w-12 h-12 flex justify-center hover:scale-110  transition duration-200 rounded-full"
            >
              <img className="w-6 rotate-180" src="/images/arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="wheel flex gap-8 overflow-x-scroll lg:overflow-x-hidden py-6 mt-3">
          {teamList.map((meamber) => (
            <div className="w-full space-y-5 ">
              <div className="border-2 border-[#3a3c56] rounded-xl w-[15.3rem] flex justify-center pt-6 px-1 max-h-[15rem] h-full">
                <img className=" object-center" src={meamber.src} alt="" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-medium">{meamber.title_name}</h1>
                <h2>{meamber.field}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className=" hidden lg:flex justify-center space-x-4 mt-5">
          <div className="first border-2 border-[#3a3c56] rounded-full p-1.5 bg-[#ef6d58]"></div>
          <div className="second border-2 border-[#171e8c] rounded-full p-1.5 "></div>
        </div>
      </div>
    </>
  );
}

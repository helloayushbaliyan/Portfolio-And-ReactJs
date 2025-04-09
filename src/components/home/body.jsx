import React, { useRef, useState } from "react";
import BrandColabScn from "./brand-colab-scn";
import Textcard from "../universalComp/textcard";
import WhiteBtn from "../universalComp/whiteBtn";
import Achivements from "../universalComp/achivements";
import LookAwesomeScn from "../universalComp/lookAwesomeScn";
export default function Body(props) {
  const textCard = [
    {
      preHeading: "ABOUT",
      title: "An Experience Design Agency",
      subHeading: "Provides a full service range",
      description:
        "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]  2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
    },
    {
      preHeading: "Video Reel",
      title: "Unlock The Greatest Value Possible",
      subHeading: "",
      description:
        "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.",
      textSize:
        "text-[2rem] 2xl:text-[3rem]  z-[100] lg:text-[{3rem}] xl:text-[2.5rem] leading-[3.2rem] md:leading-[2.5rem]",
    },
    ,
  ];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      {/* brand section start */}
      <BrandColabScn />
      {/* brand section ends */}

      {/*here Design Agency section start */}
      <div className="grid md:grid-cols-2 py-10 gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
        <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
          <img
            className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
            src="/images/design-agency.png"
            alt=""
          />
        </div>
        <div className="max-w-[80rem">
          <div className=" ">
            <Textcard data={textCard[0]} />
            <WhiteBtn btntxt="About US" />
          </div>
        </div>
        {/*here Design Agency section close */}
      </div>

      {/* achivements section start */}
      <div className="">
        <Achivements />
      </div>
      {/* achivements section end */}

      {/*here Design Agency section start */}
      <div className="border-b-3 border-[#f8e4d8] pb-[3rem]">
        <LookAwesomeScn />
      </div>

      <div className="grid md:grid-cols-2  py-[8rem] gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
        <div className="flex justify-center md:justify-start  items-center max-w-[90rem]  max-h-[40rem]  ">
          <div className=" relative flex justify-center items-center">
            <video
              onClick={togglePlayback}
              muted
              loop
              ref={videoRef}
              className="w-full md:object-cover   sm:max-w-[40rem] object-cover rounded-xl overflow-hidden md:max-w-[80rem]s    xl:max-w-[80rem] 2xl:max-w-[80rem]  max-h-[13rem] sm:max-h-[18rem]  md:max-h-[20rem] lg:max-h-[30rem]   xl:max-h-[20rem] 2xl:max-h-[50rem] xl:h-[30rem]"
              src="/video/value-posible.mp4"
            ></video>
            <div
              onClick={togglePlayback}
              className=" play-pause-btn absolute border-2 border-[#ffe2e2] p-[2.5rem] rounded-full  cursor-pointer"
            >
              <img
                className="w-10 transition duration-700"
                src={isPlaying ? "/images/pause.svg" : "/images/play.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-[80rem">
          <div className=" xl:mt-12  2xl:mt-0">
            <Textcard data={textCard[1]} />
          </div>
        </div>
        {/*here Design Agency section close */}
      </div>
    </>
  );
}

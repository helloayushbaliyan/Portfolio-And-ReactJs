import React, { useRef, useState } from "react";
import TextCard from "./textCard";

export default function VideoReel(props) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
      document.querySelector(".play-pause-btn").classList.remove("hidden");
    } else {
      videoRef.current.play();
      document.querySelector(".play-pause-btn").classList.add("hidden");
    }
    setIsPlaying(!isPlaying);
  };
  const textCard = {
    preHeading: "Video Reel",
    title: "Unlock The Greatest Value Possible",
    subHeading: "",
    description:
      "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.",
    textSize:
      "text-[2rem] 2xl:text-[3rem]    lg:text-[{3rem}] xl:text-[2.5rem] leading-[3.2rem] md:leading-[2.5rem]",
  };

  return (
    <>
      <div className="grid md:grid-cols-2  pt-[8rem] gap-9 lg:gap-[8rem] 2xl:gap-[9rem]  ">
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
            <TextCard data={textCard} />
          </div>
        </div>
      </div>
    </>
  );
}

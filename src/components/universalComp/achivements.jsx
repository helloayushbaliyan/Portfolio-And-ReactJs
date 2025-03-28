import React from "react";
import AchivementContent from "./achivementContent";

export default function Achivements(props) {
  const achivementData = [
    { value: 42, symbol: "%", discription: "Years of experience" },
    { value: 76, symbol: "+", discription: "Agency members" },
    { value: "5.000", symbol: "", discription: "Projects complete" },
  ];
  return (
    <>
      <table className="border-1  border-[#f8e4d8] my-20  grid sm:grid-cols-3">
        <AchivementContent data={achivementData[0]} />
        <AchivementContent data={achivementData[1]} />
        <AchivementContent data={achivementData[2]} />
      </table>
    </>
  );
}

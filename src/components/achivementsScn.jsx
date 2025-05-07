import React from "react";

export default function Achivements(props) {
  const achivementData = [
    { value: 42, symbol: "%", discription: "Years of experience" },
    { value: 76, symbol: "+", discription: "Agency members" },
    { value: "5.000", symbol: "", discription: "Projects complete" },
  ];
  return (
    <>
      <table className="border-1  border-[#f8e4d8] my-20  grid sm:grid-cols-3">
        {achivementData.map((data) => (
          <div
            key={data.value}
            className=" w-full text-start border-2 space-y-6 px-7 sm:px-2 md:px-8 py-9 border-[#f8e4d8]"
          >
            <h1 className="text-4xl font-bold">
              {data.value}
              {data.symbol}
            </h1>
            <h4 className="text-xl  tracking-wider   ">{data.discription}</h4>{" "}
          </div>
        ))}
      </table>
    </>
  );
}

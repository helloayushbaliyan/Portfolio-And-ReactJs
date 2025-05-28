import React from "react";

export default function ContactDetailsScn(props) {
  const achivementData = [
    {
      link: "tel:+918076152809",
      imgsrc: "/images/phone-icon.png",
      value: "Phone",
      discription: "+91 8076152809",
    },
    {
      link: "mailto:helloayushbaliyan@gmail.com",
      imgsrc: "/images/email-icon.png",
      value: "EMail",
      discription: "helloayushbaliyan@gmail.com",
    },
    {
      imgsrc: "/images/location-icon.png",
      value: "Address",
      discription: "New Delhi , India",
    },
  ];
  return (
    <>
      <table className="border-1  border-[#f8e4d8] my-20  grid sm:grid-cols-3">
        {achivementData.map((data) => (
          <div
            key={data.value}
            className=" w-full text-start border-2 space-y-6 px-7 sm:px-2 md:px-8 py-9 border-[#f8e4d8]"
          >
            <div className="flex items-center space-x-6">
              <img
                className="bg-[#ef6d58] p-4 rounded-full"
                src={data.imgsrc}
                alt=""
              />
              <h1 className="text-2xl font-bold">{data.value}</h1>
            </div>
            <a href={data.link}>
              <h4 className="text-xl  tracking-wider   ">{data.discription}</h4>{" "}
            </a>
          </div>
        ))}
      </table>
    </>
  );
}

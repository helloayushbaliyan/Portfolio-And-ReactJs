import React from "react";

export default function BlogCrd({ data, textSize }) {
  return (
    <>
      <div className="space-y-5">
        <img
          className=" rounded-[1rem] w-full  overflow-hidden object-cover "
          src={data.src}
          alt="add-blog-image"
        />
        <div className="space-y-5 pr-8">
          <h4 className="text-xl">{data.type}</h4>
          <h1
            className={`${textSize} text-[1.5rem] leading-5 sm:text-[2rem] md:text-[1.5rem]   sm:leading-7  font-[670]  `}
          >
            {data.title} 
          </h1>
          <h3 className="text-[15px]">{data.date}</h3>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function BlogCrd({ data, textSize }) {
  return (
    <>
      <div className="space-y-5  rounded-[1rem] overflow-hidden pb-4">
        <img
          className=" rounded-[1rem] w-full h-full max-h-[15rem] overflow-hidden object-cover "
          src="https://placehold.co/600x400"
          alt="add-blog-image"
        />
        <div className="space-y-5 pr-8">
          <h4 className="text-xl">design</h4>
          <h1
            className={`${textSize} text-[1.5rem] line-clamp-2 leading-5 sm:text-[2rem] md:text-[1.5rem]   sm:leading-7  font-[670]  `}
          >
            {data.title}
          </h1>
          <h3 className="text-[15px]">5 Nov, 2021</h3>
        </div>
      </div>
    </>
  );
}

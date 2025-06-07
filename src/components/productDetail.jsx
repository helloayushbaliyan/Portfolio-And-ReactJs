import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TextCard from "./textCard";

export default function ProductDetail(props) {
  const data = useLoaderData();
  console.log(data);
  const textCard = [
    {
      preHeading: "Testimonials",
      title: "",
      title2: "Clients Reviews",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]    lg:text-[{3rem}] xl:text-[3.5rem]    2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
      profileSrc: "",
    },
  ];
  return (
    <>
      <div className="px-4 lg:pl-[3rem] lg:pr-[7.5rem] mt-[5rem]">
        <div className="lg:flex gap-[4rem]">
          <div className=" flex justify-center bg-[#ef6d57]">
            <img className=" object-cover" src={data.images[0]} alt="" />
          </div>
          <div className="mt-3 space-y-4">
            <div className="">
              <h3>{data.brand}</h3>
              <h1 className=" text-[2.4rem] font-[500] w-full object-left">
                {data.title}
              </h1>
            </div>
            <p className="text-2xl text-gray-400">$ {data.price}</p>
            <div className="">
              <div className="flex">
                <div className="flex">
                  <img
                    className="w-[25px]"
                    src="/images/rating_star.svg"
                    alt=""
                  />
                  <img
                    className="w-[25px]"
                    src="/images/rating_star.svg"
                    alt=""
                  />
                  <img
                    className="w-[25px]"
                    src="/images/rating_star.svg"
                    alt=""
                  />
                  <img
                    className="w-[25px]"
                    src="/images/rating_star.svg"
                    alt=""
                  />
                  <img
                    className="w-[25px]"
                    src="/images/rating_star.svg"
                    alt=""
                  />
                </div>
                <p>({data.rating})</p>
              </div>
            </div>
            <p>{data.description}</p>
            <div className="space-y-4">
              <h1 className="pl-2 text-sm text-slate-700">Tags :</h1>
              <div className="flex space-x-4">
                {data.tags.map((tag) => (
                  <div className="bg-[#28293e] text-white rounded-full p-2">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <h2>{data.availabilityStatus}</h2>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <div className=" font-[inter] text-center  my-[3rem]">
          <div className="">
            <div className="flex justify-center   ">
              <TextCard data={textCard[0]} />
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="">
            <div className=" grid md:grid-cols-2">
              {data.reviews.map((card) => (
                <div className="rating_card hover:bg-white transition duration-200 border-2 border-[#f3d1bf] p-4 sm:p-10 space-y-7">
                  <div className="flex  justify-between space-x-4">
                    <img
                      className="w-[4rem] h-[4rem]"
                      src="/images/profile_img.png"
                      alt=""
                    />
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        <img
                          className="w-[25px]"
                          src="/images/rating_star.svg"
                          alt=""
                        />
                        <img
                          className="w-[25px]"
                          src="/images/rating_star.svg"
                          alt=""
                        />
                        <img
                          className="w-[25px]"
                          src="/images/rating_star.svg"
                          alt=""
                        />
                        <img
                          className="w-[25px]"
                          src="/images/rating_star.svg"
                          alt=""
                        />
                        <img
                          className="w-[25px]"
                          src="/images/rating_star.svg"
                          alt=""
                        />
                      </div>
                      <p>({card.rating})</p>
                    </div>
                  </div>
                  <p className=" leading-[1.9rem] line-c">{card.description}</p>
                  <div className="flex space-y-3">
                    <div className="sm:mt-3">
                      <h1 className=" text-xl sm:text-2xl font-bold">
                        {card.reviewerName}
                      </h1>
                      <p className="font-medium text-[18px]">{card.comment}</p>{" "}
                      <p className=" text-[18px]">
                        {card.reviewerEmail}
                      </p>
                      <p> Date : {card.date}</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const fetchproductdata = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  return res.json();
};

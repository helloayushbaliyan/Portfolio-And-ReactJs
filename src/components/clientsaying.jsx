import React from "react";
import TextCard from "./textCard";
import "../App.css"; // Make sure the path is correct
import WhiteBtn from "./whiteBtn";

export default function Clientsaying(props) {
  const textCard = [
    {
      preHeading: "Testimonials",
      title: "What Our",
      title2: "Clients Saying",
      subHeading: "",
      description: "",
      textSize:
        "text-[2.2rem]  z-[100] lg:text-[{3rem}] xl:text-[3.5rem]    2xl:text-[5rem]  leading-[3.2rem] 2xl:leading-[6rem] md:leading-[4rem]",
      profileSrc: "",
    },
  ];

  const ratingCard = [
    [
      {
        client_name: "Alan Martí",
        client_field: "Meta Inc.",
        description:
          "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        profileImgSrc: "/images/profile_img.png",
      },
      {
        client_name: "Graham Griffiths",
        client_field: "Twitor",
        description:
          "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
        profileImgSrc: "/images/profile_img.png",
      },
    ],
    [
      {
        client_name: "Richardo Kann",
        client_field: "Photogram",
        description:
          "Provide your business with a variety of digital solutions to promote your product or service online.",
        profileImgSrc: "/images/profile_img.png",
      },
      {
        client_name: "Maria Trofimova",
        client_field: "Whochat",
        description:
          "Promote your product or service online and help you hit your marketing goals and grow your business.",
        profileImgSrc: "/images/profile_img.png",
      },
    ],
  ];
  return (
    <>
      <div className=" font-[inter] text-center  my-[3rem]">
        <div className="">
          <div className="flex justify-center   ">
            <TextCard data={textCard[0]} />
          </div>
        </div>
      </div>
      <div className=" ">
        <div className=" grid md:grid-cols-2">
          <div className="">
            {ratingCard[0].map((card) => (
              <div className="rating_card hover:bg-white transition duration-200 border-2 border-[#f3d1bf] p-4 sm:p-10 space-y-7">
                <div className="flex space-x-2">
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                </div>
                <p className=" leading-[1.9rem] line-c">{card.description}</p>
                <div className="flex space-x-5">
                  <img
                    className="w-[4rem] h-[4rem]"
                    src="/images/profile_img.png"
                    alt=""
                  />
                  <div className="sm:mt-3">
                    <h1 className=" text-xl sm:text-2xl font-bold">{card.client_name}</h1>
                    <p className="font-medium text-[18px]">
                      {card.client_field}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {ratingCard[1].map((card) => (
              <div className="rating_card hover:bg-white transition duration-200 border-2 border-[#f3d1bf] p-4 sm:p-10 space-y-7">
                <div className="flex space-x-2">
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                  <img src="/images/rattingstar.png" alt="" />
                </div>
                <p className=" leading-[1.9rem] line-c">{card.description}</p>
                <div className="flex space-x-5">
                  <img
                    className="w-[4rem] h-[4rem]"
                    src="/images/profile_img.png"
                    alt=""
                  />
                  <div className="sm:mt-3">
                    <h1 className=" text-xl sm:text-2xl font-bold">{card.client_name}</h1>
                    <p className="font-medium text-[18px]">
                      {card.client_field}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <WhiteBtn btntxt="Sell All" />
      </div>
    </>
  );
}

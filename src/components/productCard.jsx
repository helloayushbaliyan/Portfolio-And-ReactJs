import React from "react";

export default function ProductCard({ data, textSize }) {
  return (
    <>
      <div className="space-y-2   border-1 hover:scale-110 transition-all duration-150  border-gray-300 rounded-[1rem] overflow-hidden pb-4">
        <div className=" relative">
          <img
            className=" w-full h-full  max-h-[15rem]  overflow-hidden object-contain "
            src={data.thumbnail}
            alt="add-blog-image"
          />
          <div className="bg-[#ef6d57] absolute top-3 right-3 w-12 h-12 flex justify-center items-center rounded-full">
            <p className="">{data.discountPercentage}</p>
          </div>{" "}
        </div>

        <div className="space-y-5 px-4">
          <div className="flex justify-between">
            <h1>${data.price}</h1>
            <div className="flex">
              <div className="flex">
                <img
                  className="w-[15px]"
                  src="/images/rating_star.svg"
                  alt=""
                />
                <img
                  className="w-[15px]"
                  src="/images/rating_star.svg"
                  alt=""
                />
                <img
                  className="w-[15px]"
                  src="/images/rating_star.svg"
                  alt=""
                />
                <img
                  className="w-[15px]"
                  src="/images/rating_star.svg"
                  alt=""
                />
                <img
                  className="w-[15px]"
                  src="/images/rating_star.svg"
                  alt=""
                />
              </div>
              <p>({data.rating})</p>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl line-clamp-1">{data.title}</h1>
            <p className="text-sm line-clamp-1 pr-6">{data.description}</p>
          </div>
          <div className="border-2 border-gray-500 w-full  flex justify-center rounded-full py-2">
            <button className="text-xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

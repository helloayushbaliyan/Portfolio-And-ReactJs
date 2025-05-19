import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] ">
        <div className="flex space-y-5 sm:space-y-0 flex-col justify-center items-center sm:items-start sm:flex-row sm:justify-between border-b border-b-gray-300 py-[4rem]">
          <div className="">
            <h1 className="text-2xl font-bold">Agency</h1>
          </div>
          <div className="space-y-3 text-center">
            <h1 className="text-[20px] text-[#ef6d58] uppercase">menu</h1>

            <ul className="space-y-2">
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-3 text-center">
            <h1 className="text-[20px] text-[#ef6d58] uppercase">Service</h1>

            <ul className="space-y-2">
              <li>Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>See More</li>
            </ul>
          </div>
          <div className="flex space-x-3">
            <div className="bg-[#ef6d58] w-12  h-12 rounded-full flex justify-center items-center">
              <img src="/images/facebook_icon.png" alt="" />
            </div>
            <div className="bg-[#ef6d58] w-12  h-12 rounded-full flex justify-center items-center">
              <img src="/images/twittericon.png" alt="" />
            </div>
            <div className="bg-[#ef6d58] w-12  h-12 rounded-full flex justify-center items-center">
              <img src="/images/instagramicon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-center flex-col sm:flex-row items-center sm:justify-between text-center space-y-6 sm:space-y-0">
          <h1 className="text-sm text-gray-600 ">
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </h1>
          <div className="flex space-x-12">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

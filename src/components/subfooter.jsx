import React from "react";

export default function Subfooter(props) {
  return (
    <>
      <section>
        <div className=" bg-[#ee6d58]  font-[inter] rounded-xl">
          <div className="grid md:grid-cols-2 px-4 sm:px-12 md:px-[3rem] xl:px-[4rem] 2xl:px-[6rem]  py-[2rem] gap-4 ">
            <div className="text-white mt-10 order-last md:order-first relative ">
              <div className="space-y-3">
                <div className=" relative flex">
                  <span className="text-[2.5rem] z-[100] lg:text-[3rem] xl:text-[3.4rem]  2xl:text-[3.7rem] 2xl:leading-[4rem] leading-[3.5rem] md:leading-[3.5rem] font-bold block relative">
                    We’re Help <br className="hidden lg:block" /> To Build Your{" "}
                    <br className="hidden lg:block" />
                    Dream Project
                  </span>
                </div>
                <p className=" text-[0.96rem] leading-6 2xl:text-[1.5rem] 2xl:leading-9">
                  Agency provides a full service range including technical{" "}
                  <br className="hidden lg:block" />
                  skills, design, business understanding.
                </p>
                <div className=" text-[17px] mt-10 text-[#ffffff] flex gap-2">
                  <button className="hover:bg-[#ee6d58] bg-white text-black duration-300 px-6 py-[0.8rem] font-bold rounded-md">
                    Contact Us{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
              <img className="" src="/images/help.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

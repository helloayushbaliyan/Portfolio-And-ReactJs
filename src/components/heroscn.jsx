import React from "react";
import { NavLink } from "react-router-dom";
import '../app.css';
export default function Heroscn(props) {
  return (
    <>
      <section>
        <div className=" bg-[#28293e]  font-[inter] ">
          <div className="grid md:grid-cols-2 px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem]  py-[5rem] gap-4 ">
            <div className="text-white order-last md:order-first relative ">
              <div className="space-y-3">
                <h3 className="text-xl text-[#985959]">Modern Studio</h3>
                <div className=" relative flex z-50">
                  <span className="text-[3rem]  z-50  lg:text-[4rem] xl:text-[4.2rem]  2xl:text-[5rem] 2xl:leading-[5rem] leading-[4.6rem] font-bold block relative">
                    We’re Help <br className="hidden lg:block" /> To Build Your{" "}
                    <br className="hidden lg:block" />
                    Dream Project
                    <span className=" hidden   lg:block">
                      <img
                        className="spin absolute z-[-100] top-[-2.2rem] right-[4rem] "
                        src="/images/star.png"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
                <p className="text-gray-400 text-[0.96rem] leading-6 2xl:text-[1.5rem] 2xl:leading-9">
                  Agency provides a full service range including technical{" "}
                  <br className="hidden lg:block" />
                  skills, design, business understanding.
                </p>
                <div className=" text-[17px] mt-10 text-[#ffffff] flex gap-2">
                  <button className="bg-[#ee6d58] active:bg-transparent duration-300 px-6 py-[0.8rem] font-bold rounded-md">
                    How We Work
                  </button>
                  <NavLink to="/contact" className="hover:bg-[#ee6d58] duration-300 px-6 py-[0.8rem] font-bold rounded-md">
                    Contact Us
                  </NavLink>
                </div>
                <div className="flex gap-4 mt-8 xl:mt-20">
                  <div className="">
                    <img
                      className=" rounded-full w-[3rem]"
                      src="/images/hero-profile-img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-[0.96rem] 2xl:text-[1rem] leading-6">
                      {" "}
                      "Put themselves in the merchant's shoes"
                    </p>
                    <button>Meta Inc.</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start  items-center max-w-[80rem]  ">
              <img
                className="w-full md:object-contain sm:max-w-[40rem] md:max-w-[80rem]    xl:max-w-[80rem] 2xl:max-w-[80rem]  sm:max-h-[100%]  xl:max-h-[40rem] 2xl:max-h-[50rem]"
                src="/images/hero-scn-pic.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import heroPic from "../../assets/hero-scn-pic.png";
import heroProfileImg from "../../assets/hero-profile-img.jpg";


export default function HeroScn(props) {
  return (
    <>
      <section>
        <div className=" bg-[#28293e]  font-[inter] ">
          <div className="grid md:grid-cols-2 px-4 md:px-[3rem] xl:px-[7.5rem] pt-[5rem] gap-4 ">
            <div className="text-white order-last md:order-first relative ">
              <div className="space-y-3">
                <h3 className="text-xl text-[#985959]">Modern Studio</h3>
                <div className=" relative flex">
                  <span className="text-[3rem] z-[100] lg:text-[4rem] xl:text-[4.2rem] leading-[4.6rem] font-bold block relative">
                    We’re Help <br className="hidden lg:block" /> To Build Your{" "}
                    <br className="hidden lg:block" />
                    Dream Project
                    <span className=" hidden   lg:block">
                      <img
                        className=" absolute z-[-1] top-[-2.2rem] right-[4rem] "
                        src=""
                        alt=""
                      />
                    </span>
                  </span>
                </div>
                <p className="text-gray-400 text-[0.96rem] leading-6">
                  Agency provides a full service range including technical{" "}
                  <br className="hidden lg:block" />
                  skills, design, business understanding.
                </p>
                <div className=" text-[17px] mt-10 text-[#ffffff] flex gap-2">
                  <button className="bg-[#ee6d58] active:bg-transparent duration-300 px-6 py-[0.8rem] font-bold rounded-md">
                    How We Work
                  </button>
                  <button className="hover:bg-[#ee6d58] duration-300 px-6 py-[0.8rem] font-bold rounded-md">
                    Contact Us{" "}
                  </button>
                </div>
                <div className="flex gap-4 mt-8 xl:mt-20">
                  <div className="">
                    <img
                      className=" rounded-full w-[3rem]"
                      src={heroProfileImg}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-[0.96rem] leading-6"> "Put themselves in the merchant's shoes"</p>
                    <button>Meta Inc.</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center  max-w-[80rem]">
              <img
                className="w-full  sm:max-w-[550px]    lg:max-w-[650px] 2xl:max-w-[500px]"
                src={heroPic}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const slider = () => {
    document.querySelector(".menu-scn").classList.toggle("left-[0%]");
  };
  return (
    <>
      <div
        className="
        text-white text-[15px]   flex justify-between px-4 md:px-[3rem] xl:px-[7.5rem] py-6 relative
         font-[inter]
         
      "
      >
        <div className="">
          <Link to="/">
            <img
              className="w-full lg:mt-1"
              src="/images/site-logo.svg"
              alt=""
            />
          </Link>
        </div>

        <ul className=" menu-scn  absolute z-50 lg:relative bg-white  lg:bg-transparent lg:text-white text-black transition-all  duration-500 lg:duration-75 font-semibold lg:w-auto lg:h-auto w-[17rem] left-[-100%] lg:left-0 top-0  h-screen flex">
          <div className="flex justify space-x-[6rem] flex-col lg:flex-row mt-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `
              text-black
           ${isActive ? "text-orange-400" : "lg:text-white"}
             transition duration-200
            `
              }
            >
              <li className="">About</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `
            text-black
           ${isActive ? "text-orange-400" : "lg:text-white"}
             transition duration-200
            `
              }
            >
              <li>Services</li>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `
           text-black
           ${isActive ? "text-orange-400" : "lg:text-white"}
             transition duration-200
            `
              }
            >
              <li>Pricing</li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `
          text-black
           ${isActive ? "text-orange-400" : "lg:text-white"}
             transition duration-200
            `
              }
            >
              <li>Blog</li>
            </NavLink>
          </div>
        </ul>

        <div className=" ">
          <button
            className="border-gray-600 hover:border-black hover:bg-white hover:text-black rounded-sm hover:scale-110 transition duration-200 lg:block hidden border-3 
          px-10 py-2 mt-2 "
          >
            Contact
          </button>
          <div onClick={slider} className="  lg:hidden">
            <div className="w-12">
              <img
                className="border-2 border-solid border-gray-500 p-[8px] rounded-sm hover:scale-110 transition duration-200"
                src="/images/menu.svg"
                alt="menu_svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

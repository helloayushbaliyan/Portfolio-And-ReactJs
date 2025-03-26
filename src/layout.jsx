import React from "react";
import Header from "./components/header/header";
import { Outlet } from "react-router";

export default function Layout(props) {
  return (
    <>
      <div className="">
        <div className=" bg-[#28293e] ">
          <Header />
        </div>{" "}
        <Outlet />
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import Header from "../components/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";

export default function Layout(props) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className="bg-[#28293e]">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

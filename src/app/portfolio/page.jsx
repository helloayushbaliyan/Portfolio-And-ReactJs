import React from "react";
import Hero from "../../components/hero";

export default function PortfolioPage(props) {
  const herodata = {
    title: "Portfolio",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  return (
    <>
      <Hero data={herodata} />
    </>
  );
}

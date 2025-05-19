import React from "react";
import Hero from "../../components/hero";

export default function AboutPage(props) {
  const herodata = {
    title: "About Us",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  return (
    <>
      <Hero data={herodata} />
    </>
  );
}

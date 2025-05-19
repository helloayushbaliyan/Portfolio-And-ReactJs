import React from "react";
import Hero from "../../components/hero";

export default function ServicesPage(props) {
  const herodata = {
    title: "Services",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  return (
    <>
      <Hero data={herodata} />
    </>
  );
}

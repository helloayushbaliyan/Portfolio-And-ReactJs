import React from "react";
import Hero from "../../components/hero";

export default function BlogPage(props) {
  const herodata = {
    title: "Blog Articles",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  return (
    <>
      <Hero data={herodata} />
    </>
  );
}

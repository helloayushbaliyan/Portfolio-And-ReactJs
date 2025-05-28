import React from "react";
import Hero from "../../components/hero";
import Faqscn from "../../components/faqscn";
import Achivements from "../../components/achivementsScn";
import ContactDetailsScn from "../../components/contactDetailsScn";

export default function ContactPage(props) {
  const herodata = {
    title: "Contact",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  return (
    <>
      <Hero data={herodata} />

      <iframe
        className="w-full h-screen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.349128044136!2d77.30271147127142!3d28.5671416547899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1748325583759!5m2!1sen!2sin"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <ContactDetailsScn/>
        <Faqscn />
      </div>
    </>
  );
}

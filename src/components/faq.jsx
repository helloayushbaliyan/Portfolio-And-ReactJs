import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Faq(props) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion
        className={`${
          open === 1 ? "bg-white" : ""
        } border-1 border-[#f3d1bf] min-[400px]:px-6  px-4 sm:px-12 py-5 `}
        open={open === 1}
        onClick={() => handleOpen(1)}
      >
        <AccordionHeader className="text-xl sm:text-2xl border-b-0   font-[650] ">
          <div className="flex justify-between w-full">
            <h1>A digital agency is a business</h1>
            <img
              src="/images/up.png"
              className={`${open === 1 ? "rotate-180" : ""}  hidden`}
              alt=""
            />
          </div>
        </AccordionHeader>
        <AccordionBody className="text-[16px] leading-7 text-[#80695c]">
          Digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you hit your marketing goals
          and grow your business. dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        className={`${
          open === 2 ? "bg-white" : ""
        } border-1 border-[#f3d1bf] min-[400px]:px-6  px-4 sm:px-12 py-5 `}
        open={open === 2}
        onClick={() => handleOpen(2)}
      >
        <AccordionHeader className="text-xl sm:text-2xl border-b-0  font-[650] ">
          <div className="flex justify-between w-full">
            <h1>Hire to outsource your digital</h1>
            <img
              src="/images/up.png"
              className={`${open === 2 ? "rotate-180" : ""}  hidden`}
              alt=""
            />
          </div>
        </AccordionHeader>
        <AccordionBody className="text-[16px] leading-7 text-[#80695c]">
          Digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you hit your marketing goals
          and grow your business. dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        className={`${
          open === 3 ? "bg-white" : ""
        } border-1 border-[#f3d1bf] min-[400px]:px-6  px-4 sm:px-12 py-5 `}
        open={open === 3}
        onClick={() => handleOpen(3)}
      >
        <AccordionHeader className="text-xl sm:text-2xl border-b-0  font-[650] ">
          <div className="flex justify-between w-full">
            <h1>Marketing efforts</h1>
            <img
              src="/images/up.png"
              className={`${open === 3 ? "rotate-180" : ""}  hidden`}
              alt=""
            />
          </div>
        </AccordionHeader>
        <AccordionBody className="text-[16px] leading-7 text-[#80695c]">
          Digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you hit your marketing goals
          and grow your business. dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        className={`${
          open === 4 ? "bg-white" : ""
        } border-1 border-[#f3d1bf] min-[400px]:px-6  px-4 sm:px-12 py-5 `}
        open={open === 4}
        onClick={() => handleOpen(4)}
      >
        <AccordionHeader className="text-xl sm:text-2xl border-b-0  font-[650] ">
          <div className="flex justify-between w-full">
            <h1>Can provide your business+</h1>
            <img
              src="/images/up.png"
              className={`${open === 4 ? "rotate-180" : ""}  hidden`}
              alt=""
            />
          </div>
        </AccordionHeader>
        <AccordionBody className="text-[16px] leading-7 text-[#80695c]">
          Digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you hit your marketing goals
          and grow your business. dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

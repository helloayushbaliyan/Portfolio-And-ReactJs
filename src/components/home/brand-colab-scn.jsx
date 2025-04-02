import React from "react";
export default function BrandColabScn(props) {
  const brandImages = [
    { id: 1, src: "/images/digital-site-img.png" },
    { id: 2, src: "/images/vortex-img.png" },
    { id: 3, src: "/images/explorer-img.png" },
    { id: 4, src: "/images/fuzen-img.png" },
    { id: 5, src: "/images/mediafury-img.png" },
  ];

  return (
    <>
      <div className=" flex flex-wrap justify-evenly sm:justify-between space-y-4 py-15 border-b-3 border-[#f8e4d8]  mb-20">
        {brandImages.map((img) => (
          <img
            className=" object-contain scale-90"
            key={img.id}
            src={img.src}
            alt=""
          />
        ))}
      </div>
    </>
  );
}

import React, { useContext } from "react";
import { useState } from "react";
import UseProductContext from "../context/useProductContext";

export default function Input(props) {
  const [search, setsearch] = useState("");
  console.log(search);
  const { setproduct } = useContext(UseProductContext);
  const handlesearch = (e) => {
    e.preventDefault();
    setproduct(search);

    setsearch("");
  };

  return (
    <>
      <div className="flex justify-center mx-auto lg:w-[40rem] h-10 text-2xl rounded-4xl overflow-hidden">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="search here"
          className="bg-slate-800 capitalize w-full h-full text-white px-3"
          type="text"
        />
        <button onClick={handlesearch} className="bg-[#ef6d58] px-6">
          search
        </button>
      </div>
    </>
  );
}

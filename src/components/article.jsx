import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Article(props) {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl ">{data.title}</h1>
                <h1 className="text-center text-3xl ">{data.body}</h1>

      </div>
    </>
  );
}

export const fetcharticledata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.userid}`
  );
  return res.json();
};

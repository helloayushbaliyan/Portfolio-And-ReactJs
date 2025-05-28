import React, { useEffect } from "react";
import Hero from "../../components/hero";
import BlogCrd from "../../components/blogCrd";
import { useState } from "react";
import WhiteBtn from "../../components/whiteBtn";
import { data, Link, useLoaderData } from "react-router-dom";
import { list } from "@material-tailwind/react";

export default function BlogPage(props) {
  // const [articleList, setarticleList] = useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setarticleList(data);
  //   };
  //   fetchdata();
  // }, []);


  console.log(new Date().toISOString().split('T')[0]);

  const articleList = useLoaderData();

  const [section1Cards, setsection1Cards] = useState([]);
  const [section2Cards, setsection2Cards] = useState([]);
  useEffect(() => {
    const shuffle = [...articleList];
    setsection1Cards(shuffle.slice(0, 2));
    setsection2Cards(shuffle);
  }, [articleList]);

  const herodata = {
    title: "Blog Articles",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  const [article, setarticle] = useState(8);
  const loadmore = () => {
    setarticle(article + 3);
  };

  return (
    <>
      <Hero data={herodata} />
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <div className="grid md:grid-cols-2 gap-5">
          {section1Cards.map((article) => (
            <Link to="/article" key={article.id} className="">
              <BlogCrd
                data={article}
                textSize="lg:text-[2.5rem] md:leading-12"
              />
            </Link>
          ))}
        </div>
        <hr />
        <Link
          to="/blog/id"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {section2Cards.slice(2, article).map((article) => (
            <div key={article.id} className="">
              <BlogCrd data={article} textSize="text-2xl " />
            </div>
          ))}
        </Link>
        <div className="flex justify-center ">
          <div onClick={loadmore}>
            <WhiteBtn btntxt="Looad More" />
          </div>
        </div>
      </div>
    </>
  );
}

export const fetchdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

import React, { useEffect } from "react";
import Hero from "../../components/hero";
import BlogCrd from "../../components/blogCrd";
import { useState } from "react";
import WhiteBtn from "../../components/whiteBtn";

export default function BlogPage(props) {
  const articleList = [
    {
      src: "/images/blog-img-1.png",
      type: "Stories",
      title: "Performance marketing agencies specialize ",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-2.png",
      type: "Design",
      title: "Digital marketing channels",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-3.png",
      type: "Stories",
      title: "Agency is a business you hire to outsource",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-4.png",
      type: "Stories",
      title: "Outsource your digital marketing efforts",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-5.png",
      type: "Stories",
      title: "Your business with a variety of digital",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-6.png",
      type: "Stories",
      title: "Analytics to track and report on results",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-7.png",
      type: "Stories",
      title: "The most well known performance",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-8.png",
      type: "Stories",
      title: "Marketing channels native advertising",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-3.png",
      type: "Stories",
      title: "Agency is a business you hire to outsource",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-4.png",
      type: "Stories",
      title: "Outsource your digital marketing efforts",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-5.png",
      type: "Stories",
      title: "Your business with a variety of digital",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-6.png",
      type: "Stories",
      title: "Analytics to track and report on results",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-7.png",
      type: "Stories",
      title: "The most well known performance",
      date: "7 Dec, 2021",
    },
    {
      src: "/images/blog-img-8.png",
      type: "Stories",
      title: "Marketing channels native advertising",
      date: "7 Dec, 2021",
    },
  ];

  const [section1Cards, setsection1Cards] = useState([]);
  const [section2Cards, setsection2Cards] = useState([]);
  useEffect(() => {
    const shuffle = [...articleList].sort(() => Math.random());
    console.log(shuffle);
    setsection1Cards(shuffle.slice(0, 2));
    
    setsection2Cards(shuffle);
    
  }, []);

  const herodata = {
    title: "Blog Articles",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  const [article, setarticle] = useState(8);

  const loadmore = () => {
    setarticle(article + 3);
    console.log(article);
  };
  return (
    <>
      <Hero data={herodata} />
      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <div className="grid md:grid-cols-2 gap-5">
          {section1Cards.map((article) => (
            <div className="">
              <BlogCrd
                data={article}
                textSize="lg:text-[2.5rem] md:leading-12"
              />
            </div>
          ))}
        </div>
        <hr />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {section2Cards.slice(2, article).map((article) => (
            <div className="">
              <BlogCrd data={article} textSize="text-2xl " />
            </div>
          ))}
        </div>
        <div onClick={loadmore} className="flex justify-center ">
          <WhiteBtn btntxt="Looad More" />
        </div>
      </div>
    </>
  );
}

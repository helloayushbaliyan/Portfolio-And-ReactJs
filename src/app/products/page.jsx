import React, { useEffect } from "react";
import Hero from "../../components/hero";
import BlogCrd from "../../components/blogCrd";
import { useState } from "react";
import WhiteBtn from "../../components/whiteBtn";
import { data, Link, useLoaderData } from "react-router-dom";
import { list } from "@material-tailwind/react";
import Input from "../../components/input";
import { useContext } from "react";
import ContextProvider from "../../context/contextProvider";
import UseProductContext from "../../context/useProductContext";

export default function ProductsPage(props) {
  const productList = useLoaderData();

  const [productsCards, setproductsCards] = useState([]);
  useEffect(() => {
    const shuffle = [...productList.products];
    setproductsCards(shuffle);
  }, [productList]);

  const herodata = {
    title: "Products",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  const [article, setarticle] = useState(8);
  const loadmore = () => {
    setarticle(article + 4);
  };

  return (
    <>
      <Hero data={herodata} />

      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <Input />
        <div
         
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {productsCards.slice(0, article).map((article) => (
            <Link to={`/article/${article.id}`} key={article.id} className="">
              <BlogCrd data={article} textSize="text-2xl " />
            </Link>
          ))}
        </div>

        <div className="flex justify-center ">
          <div onClick={loadmore}>
            <WhiteBtn btntxt="Looad More" />
          </div>
        </div>
      </div>
    </>
  );
}

export const fetchproductdata = async () => {
//     const {product} = useContext(UseProductContext)
// console.log(product);
  // here i ahve to use statemanagement to give the search value on this page
  const res = await fetch(`https://dummyjson.com/products/search?q=`);
  return res.json();
};

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
import ProductCard from "../../components/productCard";

export default function ProductsPage(props) {
  const [productsCards, setproductsCards] = useState([]);
  const { product } = useContext(UseProductContext);
  console.log(product);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${product}`
      );
      const data = await res.json();
      setproductsCards(data.products);
      console.log();
    };

    fetchProducts();
  }, [product]);

  const herodata = {
    title: "Products",
    discription:
      "Agency provides a full service range including technical skills, design, business understanding.",
  };
  const [productList, setproductList] = useState(8);
  const loadmore = () => {
    setproductList(productList + 4);
  };

  return (
    <>
      <Hero data={herodata} />

      <div className="px-4 sm:px-12 md:px-[3rem] xl:px-[7.5rem] 2xl:px-[10rem] mt-[5rem] space-y-[5rem]">
        <Input />
        {productsCards.length > 0 ? (
          <div className="">
            <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-7">
              {productsCards.slice(0, productList).map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className=""
                >
                  <ProductCard data={product} />
                </Link>
              ))}
            </div>
            <div className="flex justify-center ">
              <div onClick={loadmore}>
                <WhiteBtn btntxt="Looad More" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mt-20">
            {/* <h1 className="text-2xl font-semibold">No Data Found</h1> */}
            <img className="w-full lg:w-[60%]" src="/images/data_not_found.webp" alt="" />
          </div>
        )}
      </div>
    </>
  );
}

// export const fetchproductdata = async () => {
// //     const {product} = useContext(UseProductContext)
// // console.log(product);
//   // here i ahve to use statemanagement to give the search value on this page
//   const res = await fetch(`https://dummyjson.com/products/search?q=`);
//   return res.json();
// };

import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";

const HeroProducts = ({ products }) => {
  const beautyProduct = products.filter((item) => item.category == "groceries");

  return (
    <div className="bg-purple-300 w-full mt-8">
      <h1 className="font-extrabold  p-4 uppercase italic text-slate-500">
       product
      </h1>
      <span className="px-2 font-semibold italic uppercase">
        {products && products?.Category}
      </span>
      <div className="   grid grid-cols-2 lg:grid-cols-8 sm:grid-cols-4">
        {products?.map((item) => {
          return (
            <div className="w-36 py-2 flex flex-col justify-between  bg-slate-100 rounded-md m-2 text-black mx-auto">
              <div className=" ">
                <Link to={`/ProductDetailsPage/${item?.id}`}>
                  <div>
                    <img className="h-40" src={item.images[0]} alt="" />
                  </div>
                  <div>
                    <h1 className="uppercase text-xs font-semibold text-center">
                      {item.title}
                    </h1>
                  </div>
                </Link>
              </div>
              <div>
                <AddToCart item={item}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroProducts;

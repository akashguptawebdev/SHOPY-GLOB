import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = ({ products }) => {
  // Create an array to store the unique products based on their category
  const UniqueCategoryProducts =
    products &&
    products?.filter(
      (item, index, self) =>
        index === self.findIndex((p) => p.category === item.category)
    );
  // console.log(UniqueCategoryProducts);

  return (
    <>
      <div className="bg-green-200 w-full mt-8">
        <span className="font-extrabold  px-4 uppercase italic text-green-900">
          TOP CATEGORY
        </span>
        <div className="   grid grid-cols-2 sm:grid-cols-4">
          {UniqueCategoryProducts.map((item) => {
            return (
              <div className="w-32 sm:w-40 py-2 bg-slate-950 rounded-md m-2 text-white mx-auto">
                  <Link to={`/CategoryProductPage/${item.category}`}>
                  <img className="" src={item.thumbnail} alt="" />
                  <h1 className="uppercase text-xs font-extrabold text-center">
                    {item.category}
                  </h1>
              </Link>
                </div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-8 ">
        <img
          src="/electronic-store-promotional-banner-2.jpg"
          className="w-full sm:h-32"
          alt=""
        />
      </div>

      <div className="w-full mt-4 mb-6 ">
        <img
          src="/electronic-store-promotional-banner-1.jpg"
          className="w-full sm:h-32"
          alt=""
        />
      </div>
    </>
  );
};

export default Category;

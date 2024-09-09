import React from "react";
import { Link } from "react-router-dom";
import FilterByCategory from "./FilterByCategory";
import Loading from "./Loading";
import NavigateBack from "./NavigateBack";
const FilteredProduct = ({ products, params }) => {
  console.log(params);
  let Filteredproduct;
  
  if (params === "All") {
    Filteredproduct = products;
  } else {
    Filteredproduct = products?.filter((item) => item.category == params);
  }

 

  

  const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(maxStars - Math.floor(rating));

    return (
      <div className="text-yellow-500">
        <span>{filledStars}</span>
        <span>{emptyStars}</span>
      </div>
    );
  };
  return (
    <div className="mt-2 px-4 ">
      <div>
      <NavigateBack />
      </div>
      <div>
        <div className="flex justify-center items-center border shadow-md bg-white text-black py-2">
          <FilterByCategory products={products} />
        </div>
      </div>
        {!Filteredproduct? (( <div className="flex justify-center items-center h-screen w-full"><Loading /></div>)):(

      <div className="mainContaier mt-4 px-4 sm:flex gap-2 bg-slate-50 sm:flex-wrap">
        {Filteredproduct?.map((item) => {
          return (
            <Link to={`/ProductDetailsPage/${item.id}`}>
              <hr />
              <div className=" grid grid-cols-2 w-full gap-4 sm:w-44 md:w-60 sm:grid-cols-1  hover:shadow-lg  items-center px-2">
                <div className="w-full">
                  <img src={item?.thumbnail} alt="" />
                </div>
                <div className="w-full ">
                  <h1 className="text-xs mt-4 sm:text-md w-full ">
                    {item?.title}
                  </h1>
                  <div className="flex items-center mt-2 gap-1">
                    <StarRating rating={item?.rating} />
                    <span className="text-xs text-blue-500">
                      {item?.rating} <span className=""> ratings</span>
                    </span>
                  </div>

                  <div className="offers flex gap-2 items-center py-2">
                    <span className="font-semibold">${item?.price}</span>
                    <span className="line-through text-slate-400">
                      $
                      {Math.floor(
                        item?.price + (item?.price % item?.discountPercentage)
                      )}
                    </span>

                    <p className="text-green-600 font-extrabold text-xs">
                      {item?.discountPercentage}% off{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
        )}
    </div>
  );
};

export default FilteredProduct;

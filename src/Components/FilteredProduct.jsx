import React from "react";
import { Link } from "react-router-dom";
const FilteredProduct = ({ products, params }) => {
  console.log("ff", products);
  const Filteredproduct = products?.filter((item) => item.category == params);
  console.log("filter", Filteredproduct);

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
    <div className="mainContaier mt-4">
      {Filteredproduct?.map((item)=>{
        return(
        <Link to={`/ProductDetailsPage/${item.id}`}>
          <div className="grid grid-cols-2 border bg-slate-50 items-center px-2">
        <div>
          <img src={item?.thumbnail} alt="" />
        </div>
        <div className="w-full ">
          <h1 className="text-xs w-full ">
            {item?.title}
          </h1>
          <div className="flex items-center mt-2 gap-2">
            <StarRating rating={item?.rating} />
            <span className="text-sm text-blue-500">
              {item?.rating} <span className=""> ratings</span>
            </span>
          </div>

          <div className="offers flex gap-4 items-center py-2">
            <p className="text-green-600 font-extrabold text-lg">
              {item?.discountPercentage}% off{" "}
            </p>
            <span className="line-through text-slate-400">
              {Math.floor(
                item?.price +
                  (item?.price %
                    item?.discountPercentage)
              )}
            </span>
            <span>${item?.price}</span>
          </div>
        </div>
      </div>
        </Link>
        )
      })}
    </div>
  );
};

export default FilteredProduct;

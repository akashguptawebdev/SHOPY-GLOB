import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddToCart from "../Components/AddToCart";
import NavigateBack from "../Components/NavigateBack";
import SearchBar from "../Components/SearchBar";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Destructured useParams for readability
  const data = useSelector((store) => store.Product.products);
  const [filterproduct, setfilterproduct] = useState(null); // Initialized with null for consistency
  if (!id) {
    console.log("not id");
  }
  console.log(data);
  useEffect(() => {
    if (data.length > 0) {
      const foundBook = data.find((item) => item.id === parseInt(id)); // Ensured strict equality with parseInt
      setfilterproduct(foundBook || null); // Set to null if no book is found
    }
  }, [data, id]);

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

  if (!filterproduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-primary">
          <span className="loading loading-spinner"></span>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <>
      <span className="">
        <NavigateBack />
      </span>
      <div className="detailSection grid grid-cols-1 gap-4 sm:grid-cols-2 overflow-auto pt-6">
        <div className=" ">
          <div className="flex flex-col  sm:flex-row items-center sm:items-start ">
            {/* Product Image */}

            <div className="w-full bg-white">
              <div className="   flex justify-center items-center">
                <img
                  src={filterproduct?.images[0]}
                  alt="Book Cover"
                  className=" w-full rounded-lg sm:w-80"
                />
              </div>
              <div className="hidden  sm:block w-full  ">
                <div className=" flex justify-center items-center mx-auto  gap-4 bottom-0">
                  <div className="">
                    <Link to="/CartPage">
                      <AddToCart
                        item={filterproduct}
                        padingX="6"
                        paddingY="4"
                        textSize="24px"
                        Bgcolor="bg-yellow-400"
                        text="Buy Now"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <AddToCart
                      item={filterproduct}
                      padingX="6"
                      paddingY="4"
                      textSize="12px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Product Details */}
          <div className="w-full px-4 bg-white">
            <div className="">
              <p className="text-sm text-blue-500 font-extrabold">
                View more from {filterproduct?.brand || filterproduct.title}
              </p>
              <div className="mt-4">
                <p className="text-xs text-slate-500">
                  <strong className="text-black">
                    {filterproduct.brand || filterproduct.title}
                  </strong>{" "}
                  {filterproduct.description}
                </p>
              </div>

              <div className="flex items-center mt-2 gap-2">
                <StarRating rating={filterproduct.rating} />
                <span className="text-sm text-blue-500">
                  {filterproduct.rating} <span className=""> ratings</span>
                </span>
              </div>
            </div>
            <div className="offers flex gap-4 items-center py-2">
              <p className="text-green-600 font-extrabold text-lg">
                {filterproduct.discountPercentage}% off{" "}
              </p>
              <span className="line-through text-slate-400">
                {Math.floor(
                  filterproduct.price +
                  (filterproduct.price % filterproduct.discountPercentage)
                )}
              </span>
              <span>${filterproduct.price}</span>
            </div>
            <div>
              <p className="text-xs  font-serif">
                {filterproduct.shippingInformation}
              </p>
            </div>

            <p
              className={`${
                filterproduct.availabilityStatus == "In Stock"
                  ? " text-green-600"
                  : "text-red-300"
              } mt-4 border inline-block px-2 shadow-md font-semibold`}
            >
              {filterproduct.availabilityStatus}{" "}
              <span className="text-slate-400">{filterproduct.stock}</span>
            </p>
          </div>

          {/* Warranty details */}
          <div className="flex  bg-white mt-4 justify-evenly items-center">
            <h1 className="text-slate-400">Services</h1>
            <div className="w-12">
              <img src={filterproduct.thumbnail} alt="" />
            </div>
            <div>
              <p className="font-mono">{filterproduct.warrantyInformation}</p>
            </div>
          </div>
          {/*Ratings & Reviews  */}
          <section className="Ratings & Reviews mb-20 mt-4 px-4 bg-white text-black">
            <h1 className="font-extrabold">Ratings & Reviews</h1>
            <div>
              {filterproduct.reviews.map((item) => {
                return (
                  <div className="mb-8">
                    <hr />
                    <div className="flex items-center mt-2 gap-2">
                      <StarRating rating={item.rating} />
                      <span className="text-sm text-slate-400">
                        <span className=" text-slate-600">
                          {item.rating > 4 && " Must buy!"}
                        </span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-400">
                      Review for {filterproduct.title}
                    </p>

                    <p className="text-xs text-slate-600 mt-2">
                      <span className="text-slate-400">Comment:</span>{" "}
                      {item.comment}
                    </p>

                    <div className=" mt-10">
                      <p className="text-xs">
                        <span className="text-slate-400 ">Name: </span>{" "}
                        {item.reviewerName}
                      </p>
                      <p className="text-xs">
                        <span className="text-slate-400">Email: </span>{" "}
                        {item.reviewerEmail}
                      </p>
                    </div>
                    <p className="text-xs ">
                      <span className="text-slate-400">Verified Purchase</span>{" "}
                      {item.date.split("-")[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className=" fixed sm:hidden gap-4 bottom-0 grid grid-cols-2 w-full">
            <div className="w-full">
              <Link to="/CartPage">
                <AddToCart
                  item={filterproduct}
                  padingX="12"
                  paddingY="4"
                  textSize="24px"
                  Bgcolor="bg-yellow-400"
                  text="Buy Now"
                />
              </Link>
            </div>
            <div className="w-full">
              <AddToCart
                item={filterproduct}
                padingX="12"
                paddingY="4"
                textSize="12px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;

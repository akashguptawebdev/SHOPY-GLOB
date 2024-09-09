import React from "react";
import { useSelector } from "react-redux";
import HeroBanner from "../Components/HeroPage/HeroBanner";
import Category from "../Components/HeroPage/Category";
import Carousel from "../Components/HeroPage/Carousel";
import HeroProducts from "../Components/HeroPage/HeroProducts";
import TopBrand from "../Components/HeroPage/TopBrand";
const HomePage = () => {
  const products = useSelector((store) => store.Product.products);
  return (
    <div className=" mt-6 ">
      <Carousel />
      <HeroBanner />
      <Category products={products}/>
      <HeroProducts products={products}/>
      <TopBrand />
    </div>
  );
};

export default HomePage;

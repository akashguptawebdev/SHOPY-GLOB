import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Header";
import useFetch from "./utils/useFetchData.js";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Footer from "./Components/Footer.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from "./Pages/PageNotFound.jsx";
import CartPage from "./Pages/CartPage.jsx";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx";
import CategoryProductPage from "./Pages/CategoryProductPage.jsx";

const App = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const location = useLocation();
  const {id} = useParams()
  let path;
  const findPath = location.pathname.split("/")[1]
  if(findPath == "ProductDetailsPage"){
    path="ProductDetailsPage"
  }
  
  return (
    <>
      <PrimarySearchAppBar />
      <div className="sm:px-20 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ProductDetailsPage/:id" element={<ProductDetailsPage />} />
          <Route path="/CategoryProductPage/:catName"element={<CategoryProductPage/>}></Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer position="top-center" autoClose="2000" />
      </div>

      {/* Conditionally render Footer except for ProductDetailsPage */}
      {path !== `ProductDetailsPage` && <Footer />}
    </>
  );
};

export default App;

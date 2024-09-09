import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./DataSlice";
import cartReducer from "./CartSlice.js";
const ProductStore = configureStore({
  reducer: {
    Product: ProductReducer,
    cart:cartReducer
  },
});
export default ProductStore;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/Redux/CartSlice";

const AddToCart = ({
  item,
  paddingY = "1",
  paddingX = "4",
  Bgcolor = "bg-red-500",
  text = "ADD TO CART",
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  // Check if the item is already in the cart
  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  const HandleAddBook = () => {
    if (!isInCart) {
      dispatch(addItem(item));
    }
  };

  return (
    <button
      className={`border ${Bgcolor} ${isInCart && "bg-white text-black"}  w-full py-${paddingY}`}
      onClick={HandleAddBook}
    >
      {isInCart ? "In Cart" : text}
    </button>
  );
};

export default AddToCart;

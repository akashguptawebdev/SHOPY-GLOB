import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/CartSlice";
import { toast } from "react-toastify";
const AddToCart = ({
  item,
  padingX = "6",
  paddingY = "2",
  textSize = "12px",
  Bgcolor = "bg-red-500",
  text = "ADD TO CART",
}) => {
  const dispatch = useDispatch();
  const HandleAddBook = () => {
    dispatch(addItem(item));
    toast.success("Item add successfully");
  };

  return (
    <button
      className={`border ${Bgcolor} text-white font-bold  rounded-md py-${paddingY} px-${padingX}  text-[${textSize}]`}
      onClick={HandleAddBook}
    >
      {text}
    </button>
  );
};

export default AddToCart;

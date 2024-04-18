import React from "react";
import { IoCart } from "react-icons/io5";
import { useItemContext } from "../store/ItemContext";

function Header() {
  const { itemsInCart, totalPrice } = useItemContext();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 mx-5 px-4 md:px-0">
      <h1 className="text-white bg-green-600 rounded-md text-2xl px-3 py-1 mb-4 md:mb-0">Fruit & Vegetable Market</h1>
      
      <div className="md:flex md:space-x-8">
        <h3 className="text-green-600 text-2xl mb-4 md:mb-0">Total Price: {totalPrice}</h3>

        <div className="cart-num flex items-center space-x-2">
          <div className="text-2xl">{itemsInCart}</div>
          <div className="text-4xl"><IoCart /></div>
        </div>
      </div>
    </div>
  );
}

export default Header;

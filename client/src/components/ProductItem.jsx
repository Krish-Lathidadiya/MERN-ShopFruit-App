import React from "react";
import { useItemContext } from "../store/ItemContext";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useItemContext();

  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
  };

  const handleRemoveToCart = (product) => {
    console.log("product removed", product);
    removeFromCart(product);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        className="w-full h-48 object-cover mb-4 rounded-lg"
        src={product.image}
        alt={product.name}
      />
      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm mb-2">{product.description}</p>
        <p className="font-medium mb-2">Price: {product.price} Rs/Kg</p>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 md:px-4 md:py-2"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md text-sm hover:bg-red-600 md:px-4 md:py-2"
            onClick={() => handleRemoveToCart(product)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

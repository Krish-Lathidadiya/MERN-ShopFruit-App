// client/src/components/ProductList.js

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useItemContext } from "../store/ItemContext";

const ProductList = () => {
  const { products } = useItemContext();

  // Ensure products is an array before mapping over it
  const productList = Array.isArray(products) ? products : [];

  // Keep a local state for sorted products
  const [sortedProducts, setSortedProducts] = useState([...productList]);

  //sort price vice
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);

  // 'all' represents no type filter
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    setSortedProducts([...products]);
  }, [products]);

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === "all") {
      // Reset the type filter
      setSortedProducts([...products]);
    } else {
      const filtered = products.filter(
        (product) => product.type === selectedType
      );
      setSortedProducts(filtered);
    }
  };

  return (
    <div className="prdt-list">
      <h2 className="text-center text-2xl font-bold my-5">Product List</h2>

      <div className="flex flex-col md:flex-row md:justify-center items-center space-y-3 md:space-y-0 md:space-x-3 mx-auto">
        {/* sort ascending */}
        <div className="flex flex-col md:flex-row items-center">
          <button
            onClick={handleSortByPrice}
            className="bg-blue-500 rounded-md text-white px-3 py-1 mb-3 md:mb-0 md:mr-3"
          >
            Sort by Price
          </button>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <label>
              Min Price:
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="border border-black hover:ring px-2 py-1"
              />
            </label>
            <label className="">
              Max Price:
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="border border-black hover:ring px-2 py-1"
              />
            </label>
            <button
              onClick={handleFilterByPriceRange}
              className="bg-blue-500 rounded-md text-white px-3 py-1"
            >
              Filter by Price Range
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* sort items by selectedType */}
          <label>
            Filter by Type:
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-black hover:ring px-2 py-1"
            >
              <option value="all">All</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
            </select>
          </label>
          <button
            onClick={handleFilterByType}
            className="bg-blue-500 rounded-md text-white px-3 py-1"
          >
            Filter by Type
          </button>
        </div>
      </div>

      {/* product list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {sortedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>

      <div className="buy-now-btn">Buy Now</div>
    </div>
  );
};

export default ProductList;

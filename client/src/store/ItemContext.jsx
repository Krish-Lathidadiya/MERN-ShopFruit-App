import React, { useContext, createContext, useState, useEffect } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  // State variables
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getProducts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const res_data = await response.json();
        setProducts(res_data.allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchData();
  }, []);
  
  // Add item to cart
  const addToCart = (product) => {
    setTotalPrice(totalPrice + product.price);
    setCart([...cart, product]);
    setItemsInCart(itemsInCart + 1);
  };

  // Remove item from cart
  const removeFromCart = (product) => {
    const index = cart.findIndex((prdt) => prdt._id === product._id);
    console.log(index);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setTotalPrice(totalPrice - cart[index].price);
      setCart(updatedCart);
      setItemsInCart(itemsInCart - 1);
    } else {
      console.log("Item not found in the cart");
    }
  };

  // Context value
  const contextValue = {
    products,
    addToCart,
    removeFromCart,
    itemsInCart,
    totalPrice,
  };

  // Provide the context value to children
  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const contextValue = useContext(ItemContext);
  if (!contextValue) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return contextValue;
};

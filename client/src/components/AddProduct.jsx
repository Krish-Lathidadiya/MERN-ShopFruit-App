import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [input, setInput] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    image: "",
  });

  const setData = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        toast.success("add product successfully");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-3 my-5">
      <form onSubmit={submitHandler} className="flex flex-col md:flex-row">
        <input
          type="text"
          name="name"
          onChange={setData}
          value={input.name}
          placeholder="Product Name"
          className="border border-black px-3 py-2 mb-2 md:mb-0 md:w-1/4"
        />
        <input
          type="text"
          name="type"
          onChange={setData}
          value={input.type}
          placeholder="Product Type"
          className="border border-black px-3 py-2 mb-2 md:mb-0 md:w-1/4"
        />
        <input
          type="text"
          name="description"
          onChange={setData}
          value={input.description}
          placeholder="Product Description"
          className="border border-black px-3 py-2 mb-2 md:mb-0 md:w-1/4"
        />
        <input
          type="number"
          name="price"
          min={0}
          max={3000}
          onChange={setData}
          value={input.price}
          placeholder="Product Price"
          className="border border-black px-3 py-2 mb-2 md:mb-0 md:w-1/4"
        />

        <input
          type="text"
          name="image"
          onChange={setData}
          value={input.image}
          placeholder="Product Image URL"
          className="border border-black px-3 py-2 mb-2 md:mb-0 md:w-1/4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md md:ml-3"
        >
          Add Now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddProduct;

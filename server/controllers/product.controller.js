const {Product} = require("../models/productSchema");

const addProduct = async (req, res, next) => {
  try {
    const { name, type, description, price, image } = req.body
    if (!name || !type || !description || !price || !image) {
      const customError = {
        status: 400,
        message: "fill full detail!",
      };
      return next(customError);
    }
    const create = await Product.create({
      name,
      type,
      description,
      price,
      image,
    });
    if (create) {
      return res.status(200).json({ message: "successfuly inserted" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({allProducts});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addProduct, getProducts };

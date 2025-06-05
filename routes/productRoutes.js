import express from 'express'
import productModel from "../models/productModel.js";

const productRouter = express.Router()

productRouter.get("/all", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});

productRouter.post('/new', async (req, res) => {
  const product = new productModel(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
});

export default productRouter
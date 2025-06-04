import express from 'express'
import ordersModel from "../models/ordersModel.js";
const orderRouter = express.Router()
orderRouter.get('/', async (req, res) => {
  const orders = await ordersModel.find();
  res.json(orders);
});
orderRouter.get('/:email', async (req, res) => {
  const email = req.params.email;
  const orders = await ordersModel .find({ email });
  res.json(orders);
}
);
orderRouter.post('/new', async (req, res) => {
  const result = await ordersModel.create(req.body);
  res.json(result);
});

export default orderRouter;
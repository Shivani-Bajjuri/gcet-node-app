import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  orderValue: { type: Number, required: true },
});
export default mongoose.model("Order", orderSchema);
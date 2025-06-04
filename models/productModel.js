import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});
export default mongoose.model("Product", productSchema);
//const Product = mongoose.model("Product", productSchema);
//lokm/.../orders/
//local.../orders/cathy@gmail.com----get request
//local.../orders/new ---post request 
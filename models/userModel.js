import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String} ,
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
});
//const user = mongoose.model("User", userSchema);
export default mongoose.model("User", userSchema);
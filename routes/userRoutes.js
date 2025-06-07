import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const SECRET_KEY = "helloworld";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashedPass = await bcrypt.hash(pass, 10);
  const result = await userModel.create({
    name: name,
    email: email,
    pass: hashedPass,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email: email });
  if (!result) return res.json({ message: "Invalid" });
  const isPassValid = await bcrypt.compare(pass, result.pass);
  if (!isPassValid) return res.status(404).json({ message: "Invalid password" });
  const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);
  console.log(result);
  return res.json({ user: result, token: token });
});

export default userRouter;
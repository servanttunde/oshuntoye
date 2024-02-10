import express from "express";
import Products from "./products.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 6000;
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/api/products", (req, res) => {
  res.json(Products);
});
app.get("/api/products/:id", (req, res) => {
  const product = Products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server running on port ${port}`));

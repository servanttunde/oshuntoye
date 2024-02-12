import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import ProductRoutes from "./Routes/Product.js";
dotenv.config();

const port = process.env.PORT || 6000;
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/products", ProductRoutes);
app.listen(port, () => console.log(`server running on port ${port}`));

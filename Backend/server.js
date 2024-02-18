import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import { notFound, errorHandler } from "./Middleware/ErrorHandler.js";
import ProductRoutes from "./Routes/Product.js";
import UserRoutes from "./Routes/User.js";
import { errorMonitor } from "events";
dotenv.config();

const port = process.env.PORT || 6000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server running on port ${port}`));

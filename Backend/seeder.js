import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Users.js";
import Product from "./Model/productModel.js";
import User from "./Model/UserModel.js";
import Products from "./products.js";
import Order from "./Model/OrderModel.js";
import connectDB from "./Config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(Product.deleteMany());

    await Product.deleteMany();
    await User.deleteMany();
    const createUsers = await User.insertMany(users);

    const adminUser = createUsers[0]._id;

    const sampleProduct = Products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProduct);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

import express from "express";
const port = 9000;
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/api/products", (req, res) => {
  res.send("product");
});
app.get("/api/products/:id", (req, res) => {
  res.send("single product");
});

app.listen(port, () => console.log(`server running on port ${port}`));

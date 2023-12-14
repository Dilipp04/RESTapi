const express = require("express");
const app = express();
const PORT = 5000;
const productsRoute = require("./routes/productsRoute");
const connectDB = require("./db");
app.use("/api/products", productsRoute);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Live at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDB().then(() => {
  start();
});

const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/Api"

const connectDB =async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection successfully")
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB

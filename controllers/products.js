const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryData = {};
  if (company) {
    queryData.company = company;
  }
  if (name) {
    //Regex for Search functionallity
    queryData.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryData.featured = featured;
  }
  let apiData = Product.find(queryData);
  if (sort) {
    apiData = apiData.sort(sort.replace(",", " "));
  }
  if (select) {
    apiData = apiData.select(select.split(",").join(" "));
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);
  const data = await apiData;
  res.send(data);
};
module.exports = { getAllProducts };

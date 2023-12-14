//To add data to database collection explicitly

const connectDB = require('./db')
const Product = require('./models/product')
const URI = "mongodb://localhost:27017/Api"
const pjson = require('./products.json')

const start=async ()=>{
    try {
        await connectDB(URI)
        await Product.create(pjson)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start()
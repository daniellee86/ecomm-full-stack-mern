const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
//
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require ("./routes/product")
const cartRoute = require ("./routes/cart")
const orderRoute = require ("./routes/order")

//configs mongoDB url string
dotenv.config();

//mongoose connects to mongoDB
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err)
    });

//allows express to process json from requests
app.use(express.json());

//allows app to make get requests to server on different port 3000-5000
app.use(cors())

//app.METHOD(PATH - on server, HANDLER - function executed when route is matched)
app.use("/api/auth", authRoute);
// express use api endpoint, to access server routes and functions that handle HTTP requests.
app.use("/api/users", userRoute);
//
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});
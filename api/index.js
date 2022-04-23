const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//configs mongoDB url string
dotenv.config();
//
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require ("./routes/product")
const cartRoute = require ("./routes/cart")
const orderRoute = require ("./routes/order")
const stripeRoute = require("./routes/stripe");
//
const cors = require("cors")


//mongoose connects to mongoDB
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err)
    });

//allows app to make get requests to server on different port 3000-5000
app.use(cors())    
//allows express to process json from requests
app.use(express.json());
//app.METHOD(PATH - on server, HANDLER - function executed when route is matched)
app.use("/api/auth", authRoute);
// express use api endpoint, to access server routes and functions that handle HTTP requests.
app.use("/api/users", userRoute);
//
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});
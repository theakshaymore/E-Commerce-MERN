require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix projfrontend && npm run build"
//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);
//

//PORT
const port = process.env.PORT || 8000;

// heroku step
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("projfrontend/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "projfrontend", "build", "index.html")
//     );
//   });
// }

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

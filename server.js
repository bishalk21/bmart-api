require("dotenv/config");
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());

// const PORT = process.env.PORT || 5000;
const PORT = 8000;

// middleware to parse
// app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

// connect to mongodb
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "bishal-mart",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
app.listen(PORT, () => {
  //   console.log(api);
  // console.log(`Server is running http://localhost:8000`);
  console.log(`Server started on port ${PORT}`);
});

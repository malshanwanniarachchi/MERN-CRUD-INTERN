const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const restaurantRouter = require("./routes/restaurant-route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/restaurant", restaurantRouter);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected to the database and listening at PORT ${PORT}`)
  )
  .catch((err) => console.log(err));
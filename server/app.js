const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const router = require("./routers");

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors())
  .use(router)
  .listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT : ${PORT}`);
  });

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully Connect to Database");
  })
  .catch(err => {
    console.log("Can't Connect to Database!");
    process.exit();
  });

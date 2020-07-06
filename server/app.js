const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const router = require("./routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);

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

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT : ${PORT}`);
});

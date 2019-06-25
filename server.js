const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./keys.js");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");

const port = 10000 || process.env.port;

app.use("/", express.static("public"));

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

//Connect to MongoDB w mongoose
mongoose
  .connect(keys.mongoDBUrl, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

app.use(bodyParser.json());

//Query
//query by username
app.get("/api", function(req, res) {
  const userName = req.query.username;
  console.log(userName);
  res.send("API route working");
});

//Parameters
//Search by Parameters
app.get("/showprofile/:username", function(req, res) {
  const user = req.params.username;
  console.log(user);
  res.send("show profile working");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

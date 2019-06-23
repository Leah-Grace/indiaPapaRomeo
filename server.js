const express = require("express");
const app = express();
const port = 10000 || process.env.port;
const favicon = require("serve-favicon");
const path = require("path");

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  console.log("Hello Independent Providers of Rhode Island");
});

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

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

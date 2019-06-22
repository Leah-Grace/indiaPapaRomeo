const express = require("express");
const app = express();
const port = 10000 || process.env.port;
const favicon = require("serve-favicon");
const path = require("path");

app.get("/", (req, res) => {
  console.log("Hello Independent Providers of Rhode Island");
  res.send("Rhode Island Executive Office of Health and Human Services");
});

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.listen(port, () => console.log(`Server listening on port ${port}`));

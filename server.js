const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./keys.js");
const pca = require("./models/pca");
const favicon = require("serve-favicon");
const path = require("path");

const port = 10000 || process.env.port;

app.use("/", express.static("public"));

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

//Connect to MongoDB w mongoose
mongoose
  .connect(keys.mongoDBUrl, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

app.use(bodyParser.json());

//POST new pca w pca model
app.post("/api", (req, res) => {
  const pcaFirstName = req.body.pcaFirstName;
  const pcaLastName = req.body.pcaLastName;
  const pcaEmail = req.body.pcaEmail;
  const pcaPhonePrimary = req.body.pcaPhonePrimary;
  const pcaPhoneSecondary = req.body.pcaPhoneSecondary;
  const pcaCity = req.body.pcaCity;
  const pcaState = req.body.pcaState;
  const pcaZipcode = req.body.pcaZipcode;
  const pcaTravelDistanceMiles = req.body.pcaTravelDistanceMiles;
  const pcaGender = req.body.pcaGender;
  const pcaLanguages = req.body.pcaLanguages;
  const pcaNA = req.body.pcaNA;
  const pcaSmoking = req.body.pcaSmoking;
  const pcaAllergies = req.body.pcaAllergies;
  const pcaAllergiesList = req.body.pcaAllergiesList;
  const pcaHoursPerWeek = req.body.pcaHoursPerWeek;
  const pcaOnDemand = req.body.pcaOnDemand;
  const pcaExperience = req.body.pcaExperience;
  const pcaBio = req.body.pcaBio;
  const pcaApproved = req.body.pcaApproved;
  const pcaJoinDate = req.body.pcaJoinDate;

  const data = {
    pcaFirstName: pcaFirstName,
    pcaLastName: pcaLastName,
    pcaEmail: pcaEmail,
    pcaPhonePrimary: pcaPhonePrimary,
    pcaPhoneSecondary: pcaPhoneSecondary,
    pcaCity: pcaCity,
    pcaState: pcaState,
    pcaZipcode: pcaZipcode,
    pcaTravelDistanceMiles: pcaTravelDistanceMiles,
    pcaGender: pcaGender,
    pcaLanguages: pcaLanguages,
    pcaNA: pcaNA,
    pcaSmoking: pcaSmoking,
    pcaAllergies: pcaAllergies,
    pcaAllergiesList: pcaAllergiesList,
    pcaHoursPerWeek: pcaHoursPerWeek,
    pcaOnDemand: pcaOnDemand,
    pcaExperience: pcaExperience,
    pcaBio: pcaBio,
    pcaApproved: pcaApproved,
    pcaJoinDate: pcaJoinDate
  };

  console.log(data);

  const pca = new PCA(data);
  pca
    .save()
    .then(() => res.send(data))
    .catch(err => console.log(err));
});

app.get("/getall", function(req, res) {
  PCA.find().then(results => {
    console.log(results);
    res.send(results);
  });
});

app.get("/getone/:pcaFirstName", (req, res) => {
  const pcaSelected = req.params.pcaFirstName;
  console.log(pcaSelected);

  PCA.find({ pcaFirstName: pcaSelected }).then(result => {
    console.log(`Showing, ${pcaSelected}, Profile ${result}`);
    res.send(result);
  });
});

/*
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
*/

app.listen(port, () => console.log(`Server listening on port ${port}`));

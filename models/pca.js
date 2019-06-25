const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PCASchema = new Schema({
  pcaFirstName: { type: String, required: true },
  pcaLastName: { type: String, required: true },
  pcaOnDemand: { type: Boolean, required: true }
  /*
  pcaGender: { type: String, required: true },
  pcaAllergies: { type: Boolean, required: true }, //expand to an array
  pcaCity: { type: String, required: true },
  pcaState: { type: String, required: true },
  pcaZipcode: { type: String, required: true },
  pcaPhonePrimary: { type: String, required: true },
  pcaPhoneSecondary: { type: String, required: true },
  pcaArroved: { type: Boolean, default: false, required: true },
  pcaApprovedDate: { type: Date, default: Date.now }
  */
});

module.exports = PCA = mongoose.model("PCA", PCASchema);

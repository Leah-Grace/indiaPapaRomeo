const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PCASchema = new Schema({
  pcaFirstName: { type: String, required: true },

  pcaLastName: { type: String, required: true },

  pcaEmail: { type: String, required: true },

  pcaPhonePrimary: { type: String, required: true },

  pcaPhoneSecondary: { type: String, required: false },

  pcaCity: { type: String, required: true },

  pcaState: { type: String, required: true },

  pcaZipcode: { type: String, required: true },

  pcaExperience: { type: String, required: false },

  pcaBio: { type: String, required: false },

  pcaTravelDistanceMiles: { type: Number, required: true },

  pcaHoursPerWeek: { type: Number, required: true },

  pcaGender: { type: String, required: true },

  pcaNA: { type: Boolean, required: true },

  pcaSmoking: { type: Boolean, required: true },

  pcaAllergies: { type: Boolean, required: true }, //expand to an array
  /*
  pcaAllergiesList: { type: Array, required: false },
*/

  /*
  pcaOnDemand: { type: Boolean, default: false, required: true },

  pcaLanguages: { type: Array, required: true },

*/

  pcaArroved: { type: Boolean, default: false, required: true },

  pcaJoinDate: { type: Date, default: Date.now }
});

module.exports = PCA = mongoose.model('PCA', PCASchema);

const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema({
  title: {
    type: String,
    required: true,
  }
  // about: {
  //   type: String,
  //   required: true,
  // },
  // genres: {
  //   drama: { type: Boolean },
  //   comedy: { type: Boolean },
  //   family: { type: Boolean },
  //   reality: { type: Boolean },
  //   bl: { type: Boolean },
  //   actionAdventure: { type: Boolean },
  //   mystery: { type: Boolean },
  //   scifi: { type: Boolean },
  //   talk: { type: Boolean },
  //   warPolitics: { type: Boolean },
  //   required: true,
  //   type: String
  //   // niet zeker of dit werkt
  // },

}, {timestamps: true});

module.exports = mongoose.model("Serie", serieSchema);

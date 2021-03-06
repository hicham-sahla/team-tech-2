const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  img:  {
      type: String,
    },
  
  genres: [{
    type: String
  }],

}, {timestamps: true});

module.exports = mongoose.model("Serie", serieSchema);

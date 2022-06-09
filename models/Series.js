const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  personalColor: {
    type: String,
    required:true,
  },
  province: {
    type: String,
    required:true,
  },
  city: {
    type: String,
    required:true,
  },
  bio: {
    type: String,
    required:true,
  },
  petCategory: {
    type: String,
    required:true,
  },
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);

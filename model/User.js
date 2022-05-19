const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  petCategory: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

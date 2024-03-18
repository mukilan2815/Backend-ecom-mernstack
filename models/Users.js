const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userschema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },

  orders: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Users", userschema);

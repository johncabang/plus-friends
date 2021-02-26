const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

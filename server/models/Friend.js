const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  age: {
    type: Number,
  },
  notes: {
    type: String,
  },
});

const FriendModel = mongoose.model("friends", FriendSchema);

module.exports = FriendModel;

const express = require("express");
const router = express.Router();

let User = require("../models/User");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.status(400)("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;

  const newUser = new User({ email });

  newUser
    .save()
    .then(() => res.send("Email added!"))
    .catch((err) => res.status(400)("Error: " + err));
});

module.exports = router;

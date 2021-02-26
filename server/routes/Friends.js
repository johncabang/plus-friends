const express = require("express");
const router = express.Router();

let Friend = require("../models/Friend");

router.route("/").get((req, res) => {
  Friend.find()
    .then((friends) => res.json(friends))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = Number(req.body.phoneNumber);
  const age = Number(req.body.age);
  const notes = req.body.notes;

  const newFriend = new Friend({
    name,
    email,
    phoneNumber,
    age,
    notes,
  });

  newFriend
    .save()
    .then(() => res.json("Friend added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Friend.findById(req.params.id)
    .then((friend) => res.json(friend))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Friend.findByIdAndDelete(req.params.id)
    .then(() => res.json("Friend deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Friend.findById(req.params.id)
    .then((friend) => {
      friend.name = req.body.name;
      friend.email = req.body.email;
      friend.phoneNumber = Number(req.body.phoneNumber);
      friend.age = Number(req.body.age);
      friend.notes = req.body.notes;

      friend
        .save()
        .then(() => res.json("Friend updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

const express = require("express");
const router = express.Router();

let Friend = require("../models/Friend");

router.route("/").get((req, res) => {
  Friend.find().then((friends) => res.send(friends));
});

// Add Friend

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
    .then(() => res.send("Success new friend added!"))
    .catch((err) => res.status(400)("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Friend.findById(req.params.id)
    .then((friend) => res.send(friend))
    .catch((err) => res.status(400)("Error: " + err));
});

// Update Friend

router.route("/update/:id").put((req, res) => {
  const id = req.body.id;
  console.log(id);
  Friend.findById(id).then((friend) => {
    // friend.name = req.body.name;
    // friend.email = req.body.email;
    friend.phoneNumber = Number(req.body.phoneNumber);
    // friend.age = Number(req.body.age);
    // friend.notes = req.body.notes;

    friend
      .save()
      .then(() => res.send("Friend updated!"))
      .catch((err) => res.status(400)("Error: " + err));
  });
});

// Delete Friend

router.route("/:id").delete((req, res) => {
  const id = req.params.id;
  // console.log(id);
  Friend.findByIdAndDelete(id)
    .then(() => res.send("Friend deleted"))
    .catch((err) => res.status(400)("Error: " + err));
});

module.exports = router;

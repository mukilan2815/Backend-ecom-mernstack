const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.post("/", async (req, res) => {
  const { username, email } = req.body;
  const user = new Users({
    username,
    email,
    orders: [],
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

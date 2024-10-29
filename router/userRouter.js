const express = require("express");
const router = express.Router();
const {registerUser} = require("../controller/userController");
// const userController = require("../controller/userController");

router.post("/registration", registerUser);

module.exports = router;



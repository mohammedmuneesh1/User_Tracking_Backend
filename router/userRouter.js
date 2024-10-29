const express = require("express");
const router = express.Router();
const {registerUser,getAllRegisterData} = require("../controller/userController");
// const userController = require("../controller/userController");

router.post("/registration", registerUser);
router.get("/registration-data",getAllRegisterData);

module.exports = router;



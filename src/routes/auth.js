const express = require("express");
const router = express.Router();

// Controller
const controller = require("../controllers/auth");


router.get("/login", controller.getLogin);

router.post("/login", controller.postLogin);

module.exports = router;
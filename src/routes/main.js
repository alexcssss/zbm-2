const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/auth/login")
});

router.get("/home", (req, res) => {
    res.render("home", { title: "Home Page" })
})

module.exports = router;
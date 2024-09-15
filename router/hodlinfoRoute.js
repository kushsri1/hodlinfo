const express = require("express");
const router = express.Router();

router.get("/hodlinfo", (req, res)=> {
    res.render("index.ejs");
})

module.exports = router;
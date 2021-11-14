var express = require("express");

var router = express.Router();

router.use("/",require("./view"));
router.use("/calculos",require("./controller"));

module.exports = router;

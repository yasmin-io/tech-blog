const router = require("express").Router();

const homeroutes = require("./home-routes");

router.use("/", homeroutes);

module.exports = router;

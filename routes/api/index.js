const router = require("express").Router();
const tradeRoutes = require("./trade");
const userRoutes = require("./user");

router.use("/trade", tradeRoutes);
router.use("/user", userRoutes);

module.exports = router;

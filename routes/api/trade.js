const router = require("express").Router();
const tradeController = require("../../controllers/tradeController");

router
  .route("/")
  .get(tradeController.findAll)
  .post(tradeController.create);


router
  .route("/:id")
  // route that will pull from db and populate into TradeCard.js
  .get(tradeController.findById)
  .delete(tradeController.remove);


module.exports = router;

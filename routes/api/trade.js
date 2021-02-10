const router = require("express").Router();
const tradeController = require("../../controllers/tradeController");


router.route("/")
  .get(tradeController.findAll)
  .post(tradeController.create);


router
  .route("/:id")
  .get(tradeController.findById)
  .put(tradeController.update)
  .delete(tradeController.remove);

module.exports = router;

const router = require("express").Router();
const Controller = require("../controllers/controllers");

router
  .get("/", Controller.getTodo)
  .post("/", Controller.addTodo)
  .get("/:id", Controller.findById)
  .put("/:id", Controller.putById)
  .delete("/:id", Controller.destroy);

module.exports = router;

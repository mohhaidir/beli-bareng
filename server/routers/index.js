const router = require("express").Router();
const Controller = require("../controllers/controllers");

router
  .get("/todo", Controller.getTodo)
  .post("/todo", Controller.addTodo)
  .get("/todo/:id", Controller.findById)
  .put("/todo/:id", Controller.putById)
  .delete("/todo/:id", Controller.destroy);

module.exports = router;

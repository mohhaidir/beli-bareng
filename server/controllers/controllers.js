const Todo = require("../models/model");

class Controller {
  static getTodo(req, res) {
    Todo.find({})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static addTodo(req, res) {
    Todo.create(req.body)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static findById(req, res) {
    Todo.findById({ _id: req.params.id })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        if (err.value) {
          res.status(404).json({ message: "Todo Not Found!" });
        } else {
          res.status(500).json(err);
        }
      });
  }

  static putById(req, res) {
    Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description
        }
      }
    )
      .then(data => {
        Todo.find({}).then(data => {
          res.status(200).json({ message: "Successfully Update Todo!" });
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static destroy(req, res) {
    const id = req.params.id;
    Todo.findByIdAndRemove(id)
      .then(data => {
        if (data) {
          res.status(200).json({ message: "Successfully Delete Todo!", data });
        } else {
          res.status(404).json({ message: "Delete Failed due ID not Found!" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = Controller;

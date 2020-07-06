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
    Todo.findById({ _id: req.params.id }).then(data => res.json(data));
  }

  static putById(req, res) {
    Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.nama,
          description: req.body.description
        }
      }
    ).then(data => {
      Todo.find({}).then(data => res.json(data));
    });
  }

  static destroy(req, res) {
    const id = req.params.id;
    Todo.findByIdAndRemove(id).then(data => res.json("Succesfully"));
  }
}

module.exports = Controller;

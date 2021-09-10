const express = require("express");
const router = express.Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Tasks.createTask(req.body)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

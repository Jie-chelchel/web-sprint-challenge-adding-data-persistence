const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Projects.createProject(req.body)
    .then((newProject) => {
      res.json(newProject);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

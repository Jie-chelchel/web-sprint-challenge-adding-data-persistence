const express = require("express");
const router = express.Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

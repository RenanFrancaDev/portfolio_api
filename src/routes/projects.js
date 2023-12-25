const express = require("express");
const router = express.Router();
const SchemaProjects = require("../models/Projects");
const connectDatabase = require("../services/db");

/* GET home page. */
router.get("/", connectDatabase, async (req, res, next) => {
  try {
    const resDB = await SchemaProjects.find();
    res.status(200).json(resDB);
  } catch {
    res.status(500).json("internal server error");
  }
});

/* POST projects */

router.post("/", connectDatabase, async (req, res, next) => {
  try {
    let { type, title, description, teachs, imageUrl, deploy, repository } =
      req.body;
    const resDB = await SchemaProjects.create({
      type,
      title,
      description,
      teachs,
      imageUrl,
      deploy,
      repository,
    });
    res.status(200).json(resDB);
  } catch {
    res.status(500).json("internal server error");
  }
});

module.exports = router;

const express = require("express");
const imageController = require("../../controllers/api/imageController.js");
const router = express.Router();

router.get("/", imageController.getAllImageJokes);
router.get("/random", imageController.randomImageJoke);

module.exports = router;

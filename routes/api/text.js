const express = require("express");
const textController = require("../../controllers/api/textController.js");
const router = express.Router();

router.get("/", textController.getAllTextJokes);
router.get("/random", textController.randomTextJoke);

module.exports = router;

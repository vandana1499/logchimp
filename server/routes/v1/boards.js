// modules
const express = require("express");
const router = express.Router();

// controller
const boards = require("../../controllers/boards");

// middleware
const token = require("../../middlewares/token");

router.get("/boards", boards.filter);
router.post("/boards", token.validate, boards.create);

module.exports = router;

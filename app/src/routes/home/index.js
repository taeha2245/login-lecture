"use strict";

const express = require("express");
const router = express.Router();

const controller = require("./home.controller");

router.get("/", controller.output.root);
router.get("/login", controller.output.login);
router.post("/login", controller.process.login);

module.exports = router;
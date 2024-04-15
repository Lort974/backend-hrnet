const express = require("express");
const router = express.Router();
const {
  setEmployees,
  getEmployees,
} = require("../controllers/employees.controller");

router.get("/", getEmployees);

router.post("/", setEmployees);

module.exports = router;

const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const MechanicController = require("../controller/mechanicController");

router.get(
  "/findAvailable",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  MechanicController.findAvailable
);

router.get(
  "/findAll",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  MechanicController.findAll
);

module.exports = router;

// bikeService.js
const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const BikeController = require("../controller/bikeController");

router.post("/addBike", BikeController.addBike);

router.get("/findAll", BikeController.findAllBikes);
router.get("/findAllBrands", BikeController.findAllBrands);
router.post("/findByBrand", BikeController.findByBrand);
router.get("/findByBike/:bikeId", BikeController.findByBikeId);
router.patch(
  "/updateBike/:id",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  BikeController.updateBike
);
router.delete(
  "/deleteBike/:bikeId",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  BikeController.deleteBike
);

module.exports = router;

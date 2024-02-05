const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const OrderController = require("../controller/orderController");

router.get(
  "/findPlacedOrder",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  OrderController.findPlacedOrders
);

router.patch(
  "/updateOrder/:orderId",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  OrderController.updateOrder
);

module.exports = router;

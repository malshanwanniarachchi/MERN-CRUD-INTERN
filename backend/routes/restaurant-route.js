const express = require("express");
const {addRestaurant, getAllRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant} = require("../controllers/restaurant-controller") 
//const { verifyToken } = require("../helpers/auth-middleware");

const router = express.Router();

router.post("/create", addRestaurant);
router.get("/", getAllRestaurant);
router.get("/:id",  getRestaurantById);
router.put("/update/:id",  updateRestaurant);
router.delete("/:id", deleteRestaurant);

module.exports = router;
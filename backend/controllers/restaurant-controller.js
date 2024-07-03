const Restaurant = require("../models/restaurant");

const addRestaurant = async (req, res) => {
    const { Name, Address, Telephone} = req.body;
    const restaurant = new Restaurant({
        Name, 
        Address,
        Telephone 
    });
  
    try {
      await restaurant.save();
    } catch (error) {
      return res.status(500).json({ message: "Add Restaurant failed!" });
    }
  
    return res.status(201).json({ message: "Add Subject successfully!", restaurant });
  };


  const getAllRestaurant = async (req, res) => {
    let restaurant;
    try {
        restaurant = await Restaurant.find().select("-_v -createdAt -updatedAt -addedBy");
    } catch (err) {
      return res.status(500).json({ message: "Fetching Restaurant failed!" });
    }
  
    if (!restaurant) {
      return res.status(404).json({ message: "No Restaurant found!" });
    }
    return res.status(200).json({ restaurant });
  };


  const getRestaurantById = async (req, res) => {
    const restaurantId = req.params.id;
  
    let restaurant;
    try {
        restaurant = await Restaurant.findById(restaurantId);
    } catch (err) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }
  
    return res.status(200).json({ restaurant });
  };

  const updateRestaurant = async (req, res) => {
    const  restaurantId = req.params.id;
    const { Name, Address, Telephone } = req.body;
  
    let restaurant;
    try {
        restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found!" });
      }
    } catch (err) {
      return res.status(500).json({ message: "Error finding Restaurant!" });
    }
  
    if (Name !== undefined) {
        restaurant.Name = Name;
    }
    if (Address !== undefined) {
        restaurant.Address = Address;
    }
    if (Telephone !== undefined) {
        restaurant.Telephone = Telephone;
    }
    
  
    try {
      await restaurant.save();
      return res
        .status(200)
        .json({ message: "Restaurant updated successfully!", restaurant});
    } catch (err) {
      return res.status(500).json({ message: "Updating Restaurant failed!" });
    }
  };

  const deleteRestaurant = async (req, res) => {
    const restaurantId = req.params.id;
  
    let restaurant;
    try {
        restaurant = await Restaurant.findById(restaurantId);
    } catch (err) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }
  
    try {
      await restaurant.deleteOne();
    } catch (err) {
      return res.status(500).json({ message: "Deleting restaurant failed!", err });
    }
  
    return res.status(200).json({ message: "Restaurant deleted successfully!" });
  };




  module.exports = {
    addRestaurant,
    getAllRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
  
  };
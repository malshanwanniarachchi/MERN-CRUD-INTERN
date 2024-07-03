const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  Name: {
    type: String,
    required: true, 
    unique: true,
  },

  Address:{
    type:String,
    required: true  
   },
   Telephone:{
     type:String,
     required: true,
     unique:true,
   }

    

},{timestamps: true});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

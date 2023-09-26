// STEP 1. IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2. CREATE YOU DATA SCHEMA
const vegetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  readyToEat: {
    type: Boolean,
  }
});

// STEP 3. CREATE YOUR MODEL USING YOUR SCHEMA
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

// STEP 4. EXPORT YOUR NEWLY CREATED MODEL
module.exports = Vegetable;



















// const vegetables = [
//     {
//         name:'tomato',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'carrot',
//         color: 'orange',
//         readyToEat: true
//     },
//     {
//         name:'onion',
//         color: 'yellow',
//         readyToEat: false
//     },
//     {
//         name:'lettuce',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'brocoli',
//         color: 'green',
//         readyToEat: false
//     }
// ];   

// module.exports = vegetables;
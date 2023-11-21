"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isPublish": false
}
/* ------------------------------------------------------- */
// Car Model:

const CarSchema = new mongoose.Schema(
  {
    plateNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    brand: {
      type: String,
      trim: true,
      required: true,
    },

    model: {
      type: String,
      trim: true,
      required: true,
    },

    year: {
      type: Number,
      required: true,
      min: 2000,
    },

    isAutomatic: {
      type: Boolean,
      default: false,
    },

    pricePerDay: {
      type: Number,
      required: true,
    },

    isPublish: {
      type: Boolean,
      default: true,
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    updatedId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "cars", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Car", CarSchema);

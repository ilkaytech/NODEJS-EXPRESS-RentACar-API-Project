"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
// sync():

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE *
  const { mongoose } = require('../configs/dbConnection')
  await mongoose.connection.dropDatabase()
  console.log('- Database and all data DELETED!')
  /* REMOVE DATABASE */

  /* User */
  const User = require("../models/user");
  await User.deleteMany();
  await User.create({
    _id: "65343222b67e9681f937f001",
    username: "admin",
    password: "aA*123456",
    email: "admin@site.com",
    firstName: "admin",
    lastName: "admin",
    isActive: true,
    isAdmin: true,
  });
  await User.create({
    _id: "65343222b67e9681f937f002",
    username: "test",
    password: "aA*123456",
    email: "test@site.com",
    firstName: "test",
    lastName: "test",
    isActive: true,
    isAdmin: false,
  });

  /* Car */
  const Car = require("../models/car");
  await Car.deleteMany();
  await Car.create({
    _id: "65352f518a9ea121b1ca5001",
    plateNumber: "34ABC123",
    brand: "Ford",
    model: "Focus",
    year: 2020,
    isAutomatic: true,
    pricePerDay: 249.99,
    createdId: "65343222b67e9681f937f001",
    updatedId: "65343222b67e9681f937f001",
  });
  await Car.create({
    _id: "65352f518a9ea121b1ca5002",
    plateNumber: "34ABC234",
    brand: "Renault",
    model: "Megane",
    year: 2022,
    isAutomatic: false,
    pricePerDay: 199.99,
    createdId: "65343222b67e9681f937f001",
    updatedId: "65343222b67e9681f937f001",
  });
  await Car.create({
    _id: "65352f518a9ea121b1ca5003",
    plateNumber: "34ABC345",
    brand: "Opel",
    model: "Astra",
    year: 2021,
    isAutomatic: false,
    pricePerDay: 189.99,
    isPublish: false,
    createdId: "65343222b67e9681f937f001",
    updatedId: "65343222b67e9681f937f001",
  });

  /* Reservation */
  const Reservation = require("../models/reservation");
  await Reservation.deleteMany();
  await Reservation.create({
    _id: "653536ab40b4ec24bc562001",
    userId: "65343222b67e9681f937f001",
    carId: "65352f518a9ea121b1ca5001",
    startDate: "2023-10-10",
    endDate: "2023-10-16",
  });
  await Reservation.create({
    _id: "653536ab40b4ec24bc562002",
    userId: "65343222b67e9681f937f002",
    carId: "65352f518a9ea121b1ca5002",
    startDate: "2023-10-14",
    endDate: "2023-10-20",
  });

  /* Finished */
  console.log("Synchronized.");
};

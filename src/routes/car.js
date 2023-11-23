"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/car:

const permissions = require("../middlewares/permissions");
const car = require("../controllers/car");

// URL: /cars

router.route("/").get(car.list).post(permissions.isAdmin, car.create);

router
  .route("/:id")
  .get(car.read)
  .put(permissions.isAdmin, car.update)
  .patch(permissions.isAdmin, car.update)
  .delete(permissions.isAdmin, car.delete);

/* ------------------------------------------------------- */
module.exports = router;

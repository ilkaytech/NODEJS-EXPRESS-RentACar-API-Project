"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/reservation:

const permissions = require("../middlewares/permissions");
const reservation = require("../controllers/reservation");

// URL: /reservations

router
  .route("/")
  .get(permissions.isLogin, reservation.list)
  .post(permissions.isLogin, reservation.create);

router
  .route("/:id")
  .get(permissions.isLogin, reservation.read)
  .put(permissions.isAdmin, reservation.update)
  .patch(permissions.isAdmin, reservation.update)
  .delete(permissions.isAdmin, reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;

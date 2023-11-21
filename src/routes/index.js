"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/

const router = required("express").Router();
/* ---------------------------------------------------- */
// routes/:

// URL: /

// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));
// car:
router.use("/cars", require("./car"));
// reservation:
router.use("/reservations", require("./reservation"));
// document:
router.use("/documents", require("./document"));
/* ---------------------------------------------------- */
module.exports = router;

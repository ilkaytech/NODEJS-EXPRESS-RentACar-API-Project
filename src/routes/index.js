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
// car:
router.use("/cars", require("./car"));
// document:
router.use("/documents", require("./document"));
/* ---------------------------------------------------- */
module.exports = router;

"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/auth:

const auth = require("../controllers/auth");

// URL: /auth

router.post("/login", auth.login);
router.get("/logout", auth.logout);

/* ------------------------------------------------------- */
module.exports = router;

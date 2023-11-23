"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/token:

const permissions = require("../middlewares/permissions");
const token = require("../controllers/token");

// URL: /tokens

router.use(permissions.isAdmin);

router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);

/* ------------------------------------------------------- */
module.exports = router;

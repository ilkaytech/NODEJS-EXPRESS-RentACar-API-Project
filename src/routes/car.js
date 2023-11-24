"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/car:

const permissions = require("../middlewares/permissions");
const car = require("../controllers/car");

/* ------------------------------------------------------- */
// UPLOAD FILES (multer middleware):

const multer = require("multer");
const upload = multer({
  // Middleware Function
  storage: multer.diskStorage({
    destination: "./upload",
  }),
});

/* ------------------------------------------------------- */

// URL: /cars

router
  .route("/")
  .get(car.list)
  .post(permissions.isAdmin, upload.single("image"), car.create); // req.file

router
  .route("/:id")
  .get(car.read)
  .put(permissions.isAdmin, car.update)
  .patch(permissions.isAdmin, car.update)
  .delete(permissions.isAdmin, car.delete);

/* ------------------------------------------------------- */
module.exports = router;

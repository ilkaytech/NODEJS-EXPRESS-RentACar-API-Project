"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
// Middleware: upload

// Multer: UploadFile:
// https://expressjs.com/en/resources/middleware/multer.html
const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: "./upload/",
    filename: function (req, file, returnCallback) {
      returnCallback(null, file.originalname);
    },
  }),
});

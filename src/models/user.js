"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isAdmin": true
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true }
);

/* ------------------------------------------------------- */
// Schema Configs:

const passwordEncrypt = require("../helpers/passwordEncrypt");

// save: Only Create
UserSchema.pre(["save", "updateOne"], function (next) {
  // get data from "this" when create;
  // if process is updateOne, data will receive in "this._update"
  const data = this?._update || this;

  // const emailRegExp = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
  // const isEmailValidated = emailRegExp.test(data.email)
  // const isEmailValidated = RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$").test(data.email)
  const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    data.email
  ); // test from "data".

  if (isEmailValidated) {
    const isPasswordValidated =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/.test(
        data.password
      );

    if (isPasswordValidated) {
      this.password = data.password = passwordEncrypt(data.password);

      this._update = data; // updateOne will wait data from "this._update".
      next(); // Allow to save.
    } else {
      next(new Error("Password not validated."));
    }
  } else {
    next(new Error("Email not validated."));
  }
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);

"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
// sendMail(to:string, subject:string, message:string):

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
  // Create Test Account:
  // nodemailer.createTestAccount().then((email) => console.log(email))

  // // Email Account Details:
  // const emailSettings = {
  //     user: 'rnspsyvy3w3kztdn@ethereal.email',
  //     pass: 'hPU1v5CZqgf2DwD2jX',
  //     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  // }
  // const transporter = nodemailer.createTransport({
  //     host: emailSettings.smtp.host,
  //     port: emailSettings.smtp.port,
  //     secure: emailSettings.smtp.secure,
  //     auth: {
  //         user: emailSettings.user,
  //         pass: emailSettings.pass,
  //     }
  // });

  //? GoogleMail Account Details:
  // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
  const emailSettings = {
    service: "gmail",
    user: "youremail@gmail.com",
    pass: "password", // https://myaccount.google.com/u/1/apppasswords
  };

  // //? YandexMail Account Details:
  // const emailSettings = {
  //     service: 'yandex',
  //     user: 'username@yandex.com',
  //     pass: 'password'
  // }

  // Connect to server with emailSettings:
  const transporter = nodemailer.createTransport({
    service: emailSettings.service,
    auth: {
      user: emailSettings.user,
      pass: emailSettings.pass,
    },
  });

  // MessageDetails:
  const emailContent = {
    from: emailSettings.user,
    to: to,
    subject: subject,
    text: message,
    html: message,
  };

  // sendMail:
  transporter.sendMail(emailContent, (error, info) => {
    if (error) {
      console.log("ERROR", error);
    } else {
      console.log("SUCCESS", info);
    }
  });
};

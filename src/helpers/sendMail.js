"use strict";
/* -------------------------------------
    NODEJS EXPRESS | Rent A Car API
----------------------------------------*/
// sendMail(to:string, subject:string, message:string):

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
  // Set Passive:
  return true;

  // Create Test (Fake) Account:
  // nodemailer.createTestAccount().then((email) => console.log(email))
  /*
    {
      user: 'ac6evxdu3t45mgmt@ethereal.email',
      pass: 'EhuWArCFt3uevRf887',
      smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
      imap: { host: 'imap.ethereal.email', port: 993, secure: true },
      pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
      web: 'https://ethereal.email'
    }
    */
  // // Connection to mailServer:
  // const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     secure: false, // false | 'tls' | 'ssl'
  //     auth: {
  //         user: 'ac6evxdu3t45mgmt@ethereal.email',
  //         pass: 'EhuWArCFt3uevRf887'
  //     }
  // })
  // // SendMail:
  // transporter.sendMail({
  //     from: 'ac6evxdu3t45mgmt@ethereal.email',
  //     to: 'ilkaytech@gmail.com ', // 'abc@mail.com, def@mail.com'
  //     subject: 'Hello',
  //     text: 'Hello There...',
  //     html: '<b>Hello There</b>'
  // }, (error, successInfo) => {
  //     (error) ? console.log(error) : console.log(successInfo)
  // })

  //? GoogleMail (gmail):
  // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
  const mailSettings = {
    service: "Gmail",
    user: "ilkaytech@gmail.com",
    pass: "rzbzhwzqjbpbijfn", // https://myaccount.google.com/u/1/apppasswords
  };
  // //? YandexMail (yandex):
  // const mailSettings = {
  //     service: 'Yandex',
  //     user: 'username@yandex.com',
  //     pass: 'password' // your emailPassword
  // }
  // Mail Subject/Content:
  const emailContent = {
    from: mailSettings.user,
    to: to, // 'ilkaytech@gmail.com',
    subject: subject, // 'Hello',
    text: message, // 'Hello, How are you?',
    html: message, // '<b>Hello</b> How are you?'
  };

  // Connect to mailServer:
  const transporter = nodemailer.createTransport({
    service: mailSettings.service,
    auth: {
      user: mailSettings.user,
      pass: mailSettings.pass,
    },
  });
  // SendMail:
  transporter.sendMail(emailContent, (error, info) => {
    error ? console.log(error) : console.log(info);
  });
};

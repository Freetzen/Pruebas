const nodemailer = require('nodemailer');
require('dotenv').config()

console.log("user email = "+process.env.SERVICE_USER_EMAIL)
console.log(process.env.SERVICE_USER_PASS)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "contactwedevelop@gmail.com",
    pass: "xrux iwcy cykn hpjh",
  },
});

const sendEmail = (to) => {
  const mailOptions = {
    from:process.env.SERVICE_USER_EMAIL,
    to,
    subject: `${to}, welcome to WeDevelop`,
    html: `hola`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;

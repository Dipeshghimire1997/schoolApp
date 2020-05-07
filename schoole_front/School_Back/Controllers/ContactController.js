const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const tab = require("../Models");
require("dotenv/config");
module.exports = {
  getFeedBack: async (req, res, next) => {
    let getMessages = await tab.Contact.find();
    getMessages &&
      res.json({ status: 200, message: "Success", data: getMessages });
    !getMessages &&
      res.json({ status: 400, message: "Error to get informatoin" });
  },
  postFeedBack: async (req, res, next) => {
    const data = req.body;
    console.log(data);
    const output = `<div>
    <p>U have just received the mail from "${data.email}" n d msg is..... <p>"${data.message}"</p></p>
  </div>`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
    var mailOprions = {
      from: data.email,
      to: "champsworld12@gmail.com",
      subject: "Feed back from users",
      html: output,
    };

    transporter.sendMail(mailOprions, async (err, info) => {
      if (err) {
        console.log(err);
        res.json({ status: 400, message: "Message not send Invalid Email" });
      } else {
        console.log("Message send ");
        let newMessage = tab.Contact({ data });
        newMessage
          .save()
          .then((result) => res.json({ status: 200, message: "Success" }))
          .catch((err) =>
            res.json({
              status: 400,
              message: `Message not send Invalid Email ${err}`,
            }),
          );
      }
    });
  },
};

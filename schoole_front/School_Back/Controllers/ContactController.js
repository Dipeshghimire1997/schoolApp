var nodemailer = require("nodemailer");
require("dotenv").config();
module.exports = {
  getFeedBack: (req, res, next) => {
    res.send("Hello fomr feedback");
  },
  postFeedBack: async (req, res, next) => {
    const data = req.body;
    const output = `<div>
    <p>U have just received the mail from ${data.email} n d msg is..... <p>"${data.message}"</p></p>
  </div>`;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    var mailOptions = {
      from: `${data.email}`,
      to: process.env.EMAIL,
      subject: "Feed Back Message received ",
      html: output,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("ERRORS ARE ::" + err);
        res.render("contact", { msg: "Error" });
      } else {
        console.log("Success");
        res.render("contact", { msg: "Success" });
      }
    });
  },
};

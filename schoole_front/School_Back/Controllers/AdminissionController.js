const tab = require("../Models/index");
module.exports = {
  postAdminission: async (req, res, next) => {
    let data = req.body;
    let newAdminission = new tab.Adminission(data);

    await newAdminission
      .save()
      .then((result) => {
        // console.log(">>>Success", result);
        res.json({ status: 200, message: "Success" });
      })
      .catch((err) => {
        console.log("???", err);
        res.json({ status: 400, message: "Errors", data: err });
      });
  },
  getAdminission: async (req, res, next) => {
    await tab.Adminission.find()
      .then((result) => {
        // console.log(result);
        res.json({ status: 200, message: "Success", data: result });
      })
      .catch((err) => {
        console.log("????", err);
        res.json({ status: 400, message: "Error", data: err });
      });
  },
};

const bcrypt = require("bcryptjs");
const tab = require("../Models");
module.exports = {
  findUsers: async (req, res, next) => {
    res.send("Hello form get");
  },
  addAdmines: (req, res, next) => {
    const data = req.body;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password, salt, (err, hash) => {
        data.password = hash;
        console.log(data);

        const newUser = new tab.Users(data);
        newUser
          .save()
          .then((result) => console.log(">>>>", result))
          .catch((err) => console.log("????", err));
      });
    });
  },
};

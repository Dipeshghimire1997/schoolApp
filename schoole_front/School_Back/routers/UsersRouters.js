const controller = require("../Controllers/UsersController");
module.exports = (routers) => {
  routers.route("/users").get(controller.findUsers).post(controller.addAdmines);
};

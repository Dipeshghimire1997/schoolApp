const controller = require("../Controllers/ContactController");
module.exports = (routers) => {
  routers
    .route("/feedback")
    .get(controller.getFeedBack)
    .post(controller.postFeedBack);
};

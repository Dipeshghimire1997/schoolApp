const contact = require("./ContactRoutres");
module.exports = (router) => {
  contact(router);
  return router;
};

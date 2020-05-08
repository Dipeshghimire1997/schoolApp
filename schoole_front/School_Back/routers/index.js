const contact = require("./ContactRoutres");
const admission = require("./AdmissionRouters");
module.exports = (router) => {
  contact(router);
  admission(router);
  return router;
};

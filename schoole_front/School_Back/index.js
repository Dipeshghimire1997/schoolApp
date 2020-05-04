const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const connect = require("./Connect/connect");
// const routers = require("./router/");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use("/api/v/", routers(router));
// const PORT = process.env.PORT || 3003;
const PORT = 3003;

app.listen(PORT, () => console.log(`Server is now in port no ${PORT}`));

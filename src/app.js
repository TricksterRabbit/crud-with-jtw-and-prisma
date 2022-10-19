require("express-async-errors");

const express = require("express");

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("./middlewares/cors");

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);
// app.use(errorHandler);

module.exports = app;

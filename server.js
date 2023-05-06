const express = require("express");
const config = require("config");
const path = require("path");

const app = express();
// const PORT = process.env.PORT || 3001;

// const { sequelize } = require("./src/models");
const { rootRouter } = require("./src/routes/root.router");

const cors = require("cors");


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,PUT,GET,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log(req.headers.origin)
  next();
});


const bodyParser = require("body-parser");
app.use(bodyParser.json());

const morgan = require("morgan");
app.use(morgan("dev"));

const helmet = require("helmet");
app.use(helmet());

const compression = require("compression");
app.use(compression());

const swaggerDocument = require("./docs/APIs/swagger.json");
const swaggerUI = require("swagger-ui-express");
const { log } = require("console");
const publicPathDir = path.join(__dirname, "./public");
app.use("/api/v1", rootRouter);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/public", express.static(publicPathDir));

// error-handler midlleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error:
      err.message ||
      `An internal error occurred. Please contact your system admin!`,
  });
});

// app.listen(PORT, async () => {
//   console.log(`Server is up on PORT ${PORT}`);
//   try {
//     await sequelize.authenticate();
//     console.log("SQL database connected!");

//   } catch (err) {
//     console.log("SQL database connection failed");
//     console.log(`ERROR: ${err.message}`);
//   }
// });

module.exports=app;
const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const controller = require("./controller");

// Define PORT
const { PORT = 8000 } = process.env;

app.use(express.json());
app.use(cors());
// https://www.npmjs.com/package/swagger-ui-express
const options = {
  swaggerOptions: {
    url: "/api-docs",
  },
};
app.use("/docs", swaggerUI.serve, swaggerUI.setup(null, options));
app.get("/api-docs", (req, res) => {
  res.sendFile(__dirname + "/swagger.yaml");
});

// Login
app.post("/api/v1/login", controller.login);

// Admin
app.post("/api/v1/admins", controller.adminAuthenticator, controller.adminPost);
app.get("/api/v1/admins", controller.adminAuthenticator, controller.adminGet);
app.get(
  "/api/v1/admins/:id",
  controller.adminAuthenticator,
  controller.adminGetById
);
app.put(
  "/api/v1/admins/:id",
  controller.adminAuthenticator,
  controller.adminPut
);
app.delete(
  "/api/v1/admins/:id",
  controller.adminAuthenticator,
  controller.adminDelete
);

// Car
app.post("/api/v1/cars", controller.carAuthenticator, controller.carPost);
app.get("/api/v1/cars", controller.carGet);
app.get("/api/v1/cars/:id", controller.carAuthenticator, controller.carGetById);
app.put("/api/v1/cars/:id", controller.carAuthenticator, controller.carPut);
app.delete(
  "/api/v1/cars/:id",
  controller.carAuthenticator,
  controller.carDelete
);

// Member
app.post("/api/v1/register", controller.memberRegister);

// User
app.get("/api/v1/profile", controller.userCurrent);

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});

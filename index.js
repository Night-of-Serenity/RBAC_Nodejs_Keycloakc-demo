require("dotenv").config();
const cors = require("cors");
const express = require("express");
const keycloak = require("#middlewares/keycloak"); // Keycloak

const port = process.env.PORT;

// Routes
const testRoutes = require("#routes/test");
const menuItemRoutes = require("#routes/menuItems");
// const authRoutes = require("#routes/auth");

const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
};

const app = express();

app.use(keycloak.middleware());
app.use(express.json());
app.use(cors());

// Register routes
// app.use("/api", authRoutes);
app.use("/api", testRoutes);
app.use("/api", menuItemRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

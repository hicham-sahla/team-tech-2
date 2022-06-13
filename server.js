require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const userRoutes = require("./routes/userRoutes");
const serieRoutes = require("./routes/serieRoutes");

// Xiao Nan heeft dit toegevoegd
const compression = require('compression')

// Connect to MongoDB
connectDB();

// middleware & static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// set the view engine to ejs
app.set("view engine", "ejs");

// Xiao Nan heeft dit toegevoegd
app.use(compression());

// user routes
app.use(userRoutes);
app.use(serieRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("pages/404", { title: "404" });
});

// Check if the connection to the database can be established
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

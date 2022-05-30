require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const userRoutes = require('./routes/userRoutes')
// Connect to MongoDB
connectDB();

// middleware & static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// user routes
app.use(userRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render("pages/404", { title: "404" });
});

// TODO private ENV file maken voor production via Heroku
// TODO weerapi uitladen gebaseerd op provincie
// TODO Profiel bekijken en wijzigen van data toevoegen
// TODO profielen van andere bekijken
// TODO Color api uitladen als onderscheiden van  https://www.thecolorapi.com/
// TODO Query aanmaken om te filteren op juiste posts collection.find mongoDB doc
// TODO add filter to matching page
// TODO Delete unused packages
// TODO fall back functies creeëren

// Check if the connection to the database can be established
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

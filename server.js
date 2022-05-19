require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');


// Connect to MongoDB
connectDB();

app.use(express.static(path.join(__dirname, "public")));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/gettingstarted");
});

// about page
app.get("/getting-started", function (req, res) {
  let tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("pages/gettingstarted", {
    tagline: tagline,
  });
});

// TODO 404 pagina renderen
// TODO admin Vkrsx8lQ9Wo9q0Fo
// TODO private ENV file maken voor production


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});console.log("Server is listening on port 3000");

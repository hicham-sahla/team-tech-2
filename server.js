require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const User = require("./models/User");
// const user = require('controller/userController');


// Connect to MongoDB
connectDB();

app.use(express.static(path.join(__dirname, "public")));

// set the view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
  res.render("pages/gettingstarted");
});

app.get("/add-user", function (req, res) {
  const user = new User({
    firstName: 'Hicham',
    lastName: 'Sahla',
    birthDate: '2000-05-23',
    personalColor: 'Hicham',
    province: 'Noord-Holland',
    city: 'Amsterdam',
    bio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    petCategory: 'Cat',
  });

  user.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


// TODO 404 pagina renderen
// TODO admin Vkrsx8lQ9Wo9q0Fo
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
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const compression = require('compression');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const connectDB = require("./config/dbConn");


// Defining routes
const serieRoutes = require("./routes/serieRoutes");
const authRoutes = require("./routes/authRoutes");

// Connect to MongoDB
connectDB();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());

// set the view engine to ejs
app.set("view engine", "ejs");

// Using routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('pages/home'));

app.use(serieRoutes);
app.use(authRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("pages/404", { title: "404" });
});
// Check if the connection to the database can be established
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
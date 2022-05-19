let express = require("express");
let app = express();
const port = process.env.PORT || 3000;
const path = require("path");

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



// parse application/json
app.listen(port);
console.log("Server is listening on port 3000");

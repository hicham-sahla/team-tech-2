let express = require("express");
let app = express();
const port = process.env.PORT || 3000;
let bodyParser = require('body-parser')

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

app.use(express.static(__dirname + "/assets"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.listen(port);
console.log("Server is listening on port 3000");

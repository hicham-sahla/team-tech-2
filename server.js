var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
  
});

// about page
app.get('/getting-started', function(req, res) {
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/onboarding', {
    tagline: tagline
  });
});

app.use(express.static(__dirname + '/assets'));

app.listen(3000);
console.log('Server is listening on port 3000');
const User = require('../models/user');

const user_index = (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("pages/users", {
        title: "Bekijk gebruikers in je buurt",
        users: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

const user_details = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(result => {
      res.render('single/user', {user: result, title: 'Gebruiker details'});
    })
    .catch(err => {
      console.log(err);
    })
}

const user_create_get = (req, res) => {
  res.render("pages/usersCreate", {
    title: "Vul je gegevens in",
  });
}

const user_create_post = (req, res) => {
  const user = new User(req.body);

  user.save()
  .then(result => {
    res.redirect('/users');
  })
  .catch(err => {
    console.log(err);
  });
}

const user_delete = (req, res) => {
  const id = req.params.id;
  
  User.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/users' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  user_index, 
  user_details, 
  user_create_get, 
  user_create_post, 
  user_delete
}
const User = require('../models/user');

const user_index = (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("users/index", {
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
      res.render('users/details', {user: result, title: 'Gebruiker details'});
    })
    .catch(err => {
      res.status(404).render("pages/404", { title: "Gebruiker niet gevonden" });
    })
}

const user_create_get = (req, res) => {
  res.render("users/create", {
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
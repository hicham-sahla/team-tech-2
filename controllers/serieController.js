
const Serie = require("../models/Series");

const serie_index = (req, res) => {
  Serie.find()
  .lean()
  .then((result) => {
    res.render("series/index", {
      series: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

const serie_details = (req, res) => {
 const serieId = req.params.serieId;
  Serie.findById(serieId)
  .lean()
  .then((result) => {
    res.render("series/details", {
      series: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

const serie_create_get = (req, res) => {
  res.render("series/create");
};

const serie_create_test = (req, res) => {
  res.render("series/form-test");
};

const serie_home = (req, res) => {
  Serie.find()
  .lean()
  .sort({title: -1}) // Hij gaat filter op abc
  .then(result => { 
    const firstDbItem = result[0] 
    res.render("series/home", {series: firstDbItem});
  });
};

const serie_profile = (req, res) => {
  res.render("series/profile");
};
const serie_signin = (req, res) => {
  res.render("series/signin");
};
const serie_signup = (req, res) => {
  res.render("series/signup");
};

const serie_create_post = (req, res) => {
  const serie = new Serie(req.body);

  serie
    .save()
    .then((result) => {
      res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
};

const serie_like_post = (req, res) => {
  const userId = req.params.userId;
  // Hier moet iets staan van: User.fintOne(userId)
  let doc = await user.findOneAndUpdate(filter, update, {

  });

  res.redirect("series/index");
};

// Xiao Nan like functie met mongodb
app.post("/profile/:userId/:slug", async (req, res) => {
  const query = {_id: ObjectId(req.params.userId)};
  const user = await db.collection("users").findOne(query);
  const filteredList = user.mylist.filter(kdrama => kdrama !== req.body.kdramaId)
  const updateQuery = { $set: { mylist: filteredList } }
  await db.collection('users').updateOne(query, updateQuery)

  const url = `/profile/${req.params.userId}/${req.params.slug}`;
  res.redirect(url);
});

module.exports = {
  serie_index,
  serie_details,
  serie_create_get,
  serie_create_test,
  serie_create_post,

  serie_home,
  serie_profile,
  serie_signin,
  serie_signup,
  serie_like_post
};
const Serie = require("../models/Serie");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const serie_index = (req, res) => {
  Serie.find()
    .lean()
    .then((result) => {
      res.render("series/index", {
        series: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const serie_liked = (req, res) => {
  //de token ophalen en opslaan in const token
  const token = req.cookies.jwt;
  //verify jwt token
  jwt.verify(token, "secret", async (err, decodedToken) => {
    //error handling
    if (err) console.log(err); // eg. invalid token, or expired token
    //user ophalen met findbyid
    let user = await User.findById(decodedToken.id);
    //series ophalen
    Serie.find()
      .lean()
      .then((series) => {
        //series filteren op liked
        const likedSeries = series.filter((serie) =>
          //series de overeen komen met de ids
          user.likes.includes(serie._id)
        );

        res.render("series/liked", {
          series: likedSeries,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const serie_details = (req, res) => {
  const id = req.params.id;
  Serie.findById(id)
    .lean()
    .then((result) => {
      res.render("series/details", { series: result });
    })
    .catch((err) => {
      res.status(404).render("pages/404", { title: "Serie niet gevonden" });
    });
};

const serie_create_get = (req, res) => {
  res.render("series/create");
};

const serie_create_post = (req, res) => {
  const serie = new Serie(req.body);

  serie
    .save()
    .then((result) => {
      result, res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  serie_index,
  serie_liked,
  serie_details,
  serie_create_get,
  serie_create_post,
};

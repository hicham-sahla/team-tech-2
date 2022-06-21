const Serie = require("../models/Serie");

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
const id = req.params.id;
Serie.findById(id)
  .lean()
  .then((result) => {
    res.render("series/details", { series: result});
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
      result,
      res.send("Gelukt");
    })
    .catch((err) => {
      console.log(err);
    });
};






module.exports = {
  serie_index,
  serie_details,
  serie_create_get,
  serie_create_post,
};

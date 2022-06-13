
const serie_index = (req, res) => {
      res.render("series/index");
};

const serie_details = (req, res) => {
      res.render("series/details");
};

const serie_create_get = (req, res) => {
  res.render("series/create");
};

const serie_create_test = (req, res) => {
  res.render("series/form-test");
};

// Xiao nan heeft dit toegevoegd
const serie_home = (req, res) => {
  res.render("series/home");
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

module.exports = {
  serie_index,
  serie_details,
  serie_create_get,
  serie_create_test,
  serie_create_post,

  // Xiao Nan heeft dit toegevoegd
  serie_home
};

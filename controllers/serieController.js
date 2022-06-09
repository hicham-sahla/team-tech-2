
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



module.exports = {
  serie_index,
  serie_details,
  serie_create_get,
  serie_create_test,
};

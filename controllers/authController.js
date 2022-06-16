// controller actions
module.exports.signup_get = (req, res) => {
  res.render('auth/signup');
}

module.exports.login_get = (req, res) => {
  res.render('auth/login');
}

module.exports.signup_post = async (req, res) => {
  res.send('new signup');
}

module.exports.login_post = async (req, res) => {
  res.send('user login');
}
const userCtrl = {};

userCtrl.renderLoginForm = (req, res) => {
    res.render('users/login');
};

userCtrl.login = (req, res) => {
   res.send('login');
};

userCtrl.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

userCtrl.signin = (req, res) => {
   res.send('signin');
};

userCtrl.logout = (req, res) => {
    res.send('logout');
}

module.exports = userCtrl;
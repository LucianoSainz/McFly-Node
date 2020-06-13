const userCtrl = {};

const User = require('../models/User');

userCtrl.renderLoginForm = (req, res) => {
  res.render('users/login');
};

userCtrl.login = (req, res) => {
  res.send('login');
};

userCtrl.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

userCtrl.signin = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: 'Passwords do not mach' });
  }
  if (password.length < 7) {
    errors.push({ text: 'Password  must be at least 7 characters.' });
  }
  if (errors.length > 0) {
    res.render('users/signin', {
      errors,
      name,
      email
    })
  } else {
   const emailUser =  await User.findOne({email: email});
   if(emailUser){
     req.flash('error', 'the email is already in use.');
     res.redirect('/users/signin');
   } else {
    const newUser =  new User({name, email, password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash('success', 'You are Registered');
    res.redirect('/users/login');
   }
  }
};

userCtrl.logout = (req, res) => {
  res.send('logout');
}

module.exports = userCtrl;
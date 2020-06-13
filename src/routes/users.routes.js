const {Router} = require('express');
const router = Router();

const {renderLoginForm, renderSignInForm, login, signin, logout } = require('../controllers/users.controllers');

router.get('/users/login', renderLoginForm)

router.post('/users/login', login);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;
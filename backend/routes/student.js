var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/studentController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/studentRegistration', userController.registerUser);
router.post('/studentLogin', userController.login);
module.exports = router;

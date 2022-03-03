var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/facultyController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/facultyregistration', userController.registerUser);
router.post('/facultylogin', userController.login);
module.exports = router;

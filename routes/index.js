var express = require('express');
var router = express.Router();

// Controller
const userController = require('../controllers').user;

// GET home Page
router.get('/', function (req, res) {
    res.render('index', { title: 'reservacation-api' });
});

// User Router
router.get('/api/users', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('api/user/:id', userController.update);
router.delete('api/user/:id', userController.delete);

module.exports = router;
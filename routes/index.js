var express = require('express');
var router = express.Router();

// Controller
const userController = require('../controllers').user;
const storeController = require('../controllers').store;

// GET home Page
router.get('/', function (req, res) {
    res.render('index', { title: 'reservacation-api' });
});

// User Router
router.get('/users', userController.list);
router.post('/users', userController.add);
router.get('/user/:id', userController.getById);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

// Store Router
router.get('/stores', storeController.list);
router.post('/stores', storeController.add);
router.get('/store/:id', storeController.getById);

module.exports = router;
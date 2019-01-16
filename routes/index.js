var express = require('express');
var router = express.Router();

// Controller
const userController = require('../controllers').user;
const storeController = require('../controllers').store;
const storeImageController = require('../controllers').storeImage;
const reviewController = require('../controllers').review;

// GET home Page
router.get('/', function (req, res) {
    res.render('index', { title: 'reservacation-api' });
});

// User Router
router.get('/users', userController.list);
router.get('/user/:id', userController.getById);
router.post('/user', userController.add);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

// Store Router
router.get('/stores', storeController.list);
router.get('/store/:id', storeController.getById);

// StoreImage Router
router.get('/storeImages/:storeId', storeImageController.getByStoreId);

// Review Router
router.get('/reviews/:storeId', reviewController.getByStoreId);

module.exports = router;
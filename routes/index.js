var express = require('express');
var router = express.Router();
var aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/awsConfig.json');
var s3 = new aws.S3();
var multer = require('multer')
var multerS3 = require('multer-s3')

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'reservacation',
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '_' + file.originalname);
        },
        acl: 'public-read'
    })
});

// Controller
const userController = require('../controllers').user;
const storeController = require('../controllers').store;
const storeImageController = require('../controllers').storeImage;
const reviewController = require('../controllers').review;
const authController = require('../controllers').auth;
const bookingController = require('../controllers').booking;

// GET home Page
router.get('/', function (req, res) {
    res.render('index', { title: 'reservacation-api' });
});

// User Router
router.get('/users', userController.list);
router.get('/users/:id', userController.getById);
router.post('/users', userController.add);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// Auth Router
router.post('/auth/token', authController.getToken);
router.post('/auth/newToken', authController.getNewToken);

// Store Router
router.get('/stores', storeController.list);
router.get('/stores/around', storeController.getByPosition);
router.get('/stores/:id', storeController.getById);
router.post('/stores', storeController.add);

// StoreImage Router
router.get('/storeImages/:storeId', storeImageController.getByStoreId);

// Review Router
router.get('/stores/:storeId/reviews', reviewController.getByStoreId);
router.get('/reviews/:id', reviewController.getById);
router.post('/reviews', upload.single('reviewImg'), reviewController.add)

// Booking Router
router.get('/bookings/:storeId/waitingCount', bookingController.getWaitingCount);
router.get('/bookings/:storeId', bookingController.getByStoreAndUserId);
router.post('/bookings/:storeId', bookingController.add);

module.exports = router;
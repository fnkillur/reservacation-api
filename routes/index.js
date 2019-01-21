var express = require('express');
var router = express.Router();

// Controller
const userController = require('../controllers').user;
const storeController = require('../controllers').store;

// GET home Page
router.get('/', function (req, res) {
    res.render('index', {title: 'reservacation-api'});
});

// User Router
router.get('/users', userController.list);
router.post('/users', userController.add);
router.get('/user/:id', userController.getById);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

/**
 * @swagger
 * /stores:
 *   get:
 *     tags:
 *       - stores
 *     summary: 스토어 리스트 리턴
 *     responses:
 *       200:
 *         description: 스토어 정보 리스트를 리턴합니다.
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/stores'
 *   requestBody:
 *     content:
 *       'application/json':
 *     schema:
 *       $ref: '#/components/schemas/store'
 *     examples:
 *       foo:
 *         summary: A foo example
 *       value: {"foo": "bar"}
 *       bar:
 *       summary: A bar example
 *       'application/xml':
 *         examples:
 *           xmlExample:
 *             summary: This is an example in XML
 *             externalValue: 'http://example.org/examples/address-example.xml'
 *             'text/plain':
 *                examples:
 *                  textExample:
 *                    summary: This is a text example
 *                    externalValue: 'http://foo.bar/examples/address-example.txt'
 *   parameters:
 *     - name: pageNum
 *       in: pageNum=?
 *       required: false
 *       description: 몇번째 페이지를 찾을 건지 값 입력 (default 1)
 *       schema:
 *         type: string
 *     - name: perPageNum
 *       in: perPageNum=?
 *       required: false
 *       description: 총 몇개의 리스트를 가져올건지 입력 (default 20)
 *       schema:
 *         type: string
 */
router.get('/stores', storeController.list);

/**
 * @swagger
 * /stores:
 *   post:
 *     summary: 스토어 정보 생성
 *     tags: [stores]
 *     responses:
 *       201:
 *         description: 스토어 정보를 생성합니다.
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/stores'
 *   parameters:
 *     - name: email
 *       in: email=?
 *       required: true
 *       description: 컨텍할 이메일 입력
 *       schema:
 *         type: string
 *     - name: address
 *       in: address=?
 *       required: true
 *       description: 주소 입력
 *       schema:
 *         type: string
 *     - name: detail_address
 *       in: detail_address=?
 *       required: true
 *       description: 총 몇개의 리스트를 가져올건지 입력 (default 20)
 *       schema:
 *         type: string
 *     - name: address
 *       in: pageNum=?
 *       required: true
 *       description: 총 몇개의 리스트를 가져올건지 입력 (default 20)
 *       schema:
 *         type: string
 *     - name: address
 *       in: pageNum=?
 *       required: true
 *       description: 총 몇개의 리스트를 가져올건지 입력 (default 20)
 *       schema:
 *         type: string
 */
router.post('/stores', storeController.add);

/**
 * @swagger
 * /store/:id:
 *   get:
 *     summary: 스토어 정보 리턴
 *     tags: [stores]
 *     responses:
 *       200:
 *         description: 스토어 정보를 리턴합니다.
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/store'
 */
router.get('/store/:id', storeController.getById);

module.exports = router;
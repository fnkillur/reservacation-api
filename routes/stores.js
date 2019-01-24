var express = require('express');
var router = express.Router();

// GET store list
router.get('/', (req, res) => {
    
    res.send('');
});

// POST sotre 
router.post('/', (req, res) => {

});

// GET one store by id
router.get(':id', (req, res) => {

});

module.exports = router;
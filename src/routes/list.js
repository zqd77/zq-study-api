var express = require('express');
var router = express.Router();
var query = require('../mysql/configsql');

/* GET users listing. */
router.get('/api/select', function(req, res, next) {
    query('select * from list', function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});

module.exports = router;
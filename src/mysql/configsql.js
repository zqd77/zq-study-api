var mysql = require('mysql');
var opt = {
    user: 'root',
    password: 'root',
    database: '1609b'
};
var pool = mysql.createPool(opt);

var query = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            ck && ck(err)
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    ck && ck(err)
                } else {
                    ck && ck(null, result)
                }
            })
            con.release();
        }
    })
}
module.exports = query;
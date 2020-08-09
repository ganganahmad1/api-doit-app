const connection = require('../configs/db');

module.exports = {
    insert: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO schedule SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
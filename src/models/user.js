const connection = require('../configs/db');

module.exports = {
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO user SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    login: (username) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE username = ?`, username, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    updateToken: (username, token) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET token = ? WHERE username = ?`, [token, username], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    logout: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET token = '' WHERE id_user = ?`, id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getProfile: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE id_user = ?`, id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }

}
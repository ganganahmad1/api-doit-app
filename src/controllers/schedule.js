const scheduleModel = require('../models/schedule');
const miscHelper = require('../helpers/helpers');

module.exports = {
    insert: (req, res) => {
        let input = req.body;

        const data = {
            id_user: input.id_user,
            title: input.title,
            date: input.date,
            time: input.time,
            place: input.place,
            category: input.category
        //data yang dikirim ke database apa aja
        }

        scheduleModel.insert(data)
            .then(() => {
                console.log(data)
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, error, 400)
            })
    }
}
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const BOOKING_STATUS = require('../config/_constData.json').bookingStatus;
const Bookings = require('../models').Bookings;

module.exports = {
    getWaitingCount(req, res) {
        return Bookings.findAndCountAll({
            where: {
                store_id: req.params.storeId,
                status: BOOKING_STATUS['waiting']
            }
        })
            .then(data => res.status(200).send({ waitingCount: data.count }))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        let originToken = req.headers.authorization.split(' ')[1];
        let decodedToken = jwt.verify(originToken, jwtConfig.secret);
        let booking = {
            store_id: parseInt(req.params.storeId),
            user_id: parseInt(decodedToken.id),
            status: BOOKING_STATUS['pending'],
            customer_count: parseInt(req.body.customerCount),
            compareDate: new Date((new Date()).toString().substr(0, 10))
        }
        return Bookings.findOrCreate({
            where: {
                store_id: booking.store_id,
                user_id: booking.user_id,
                createdAt: {
                    [Op.gt]: booking.compareDate
                }
            },
            default: {
                store_id: booking.store_id,
                user_id: booking.user_id,
                status: BOOKING_STATUS['pending'],
                customer_count: booking.customerCount
            }
        }).spread((booking, created) => {
            if (created) {
                return res.status(200).send({ booking, message: '예약 요청이 정상적으로 처리되었습니다.' });
            } else {
                return res.status(406).send({ message: '이미 예약된 가게입니다.' });
            }
        }).catch(error => res.status(400).send(error));
    }
}

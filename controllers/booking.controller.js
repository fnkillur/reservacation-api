const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const BOOKING_STATUS = require('../config/_constData.json').bookingStatus;
const Bookings = require('../models').Bookings;

const getHashId = req => {
  const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], jwtConfig.secret);
  return parseInt(decodedToken.id);
};


module.exports = {
  getWaitingCount(req, res) {
    if (!req.headers.authorization) {
      res.status(403).send({message: '로그인 후 이용해주세요.'});
      return;
    }

    return Bookings.findAndCountAll({
      where: {
        store_id: req.params.storeId,
        status: BOOKING_STATUS['waiting'],
        user_id: {
          [Op.not]: getHashId(req)
        },
        createdAt: {
          [Op.gt]: new Date(new Date().toISOString().substr(0, 10).replace('T', ' '))
        }
      }
    })
      .then(data => res.status(200).send({waitingCount: data.count}))
      .catch(error => res.status(400).send(error));
  },

  getByStoreAndUserId(req, res) {
    if (!req.headers.authorization) {
      res.status(403).send({message: '로그인 후 이용해주세요.'});
      return;
    }

    return Bookings.findOne({
      where: {
        store_id: parseInt(req.params.storeId),
        user_id: getHashId(req),
        createdAt: {
          [Op.gt]: new Date(new Date().toISOString().substr(0, 10).replace('T', ' '))
        }
      }
    })
      .then(booking => res.status(200).send(booking))
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    if (!req.headers.authorization) {
      res.status(403).send({message: '로그인 후 이용해주세요.'});
      return;
    }

    const booking = {
      store_id: parseInt(req.params.storeId),
      user_id: getHashId(req),
      status: BOOKING_STATUS['pending'],
      customer_count: parseInt(req.body.customerCount),
    };

    return Bookings.findAll({
      where: {
        store_id: booking.store_id,
        user_id: booking.user_id,
        createdAt: {
          [Op.gt]: new Date(new Date().toISOString().substr(0, 10).replace('T', ' '))
        }
      }
    }).then(bookings => {
      if (bookings.length) {
        return res.status(406).send({message: '이미 예약된 가게입니다.'});
      } else {
        Bookings.create(booking)
          .then(booking => res.status(200).send({booking, message: '예약 요청이 정상적으로 처리되었습니다.'}))
          .catch(error => res.status(400).send(error));
      }
    }).catch(error => res.status(400).send(error));
  }
}

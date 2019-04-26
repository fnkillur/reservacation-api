const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const Reviews = require('../models').Reviews;
const s3Url = require('../config/_constData.json').reviewUpload.url;
const path = require('path');

module.exports = {
  getByStoreId(req, res) {
    const perPageNo = parseInt(req.query.perPageNo || 20);
    const pageNo = parseInt(req.query.pageNo || 0);

    return Reviews.findAndCountAll({
      where: {
        store_id: req.params.storeId
      },
      order: [['id', 'DESC']],
      limit: perPageNo,
      offset: perPageNo * pageNo
    })
      .then(result => {
        let reviews = {
          totalPageCount: Math.ceil(result.count / perPageNo),
          data: result.rows
        }
        res.status(200).send(reviews)
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], jwtConfig.secret);

    return Reviews.create({
      store_id: req.body.storeId,
      writer_id: decodedToken.id,
      description: req.body.description,
      img_src: s3Url + path.basename(req.file.location)
    })
      .then(review => res.status(200).send({review, message: '리뷰가 성공적으로 등록되었습니다.'}))
      .catch(error => res.status(400).send(error));
  },

  getById(req, res) {
    return Reviews.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(review => res.status(200).send(review))
      .catch(error => res.status(400).send(error));
  }
};
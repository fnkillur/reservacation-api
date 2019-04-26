const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Users = require('../models').Users;

const ISSUER = 'api.reservacation.com';
const jwtConfig = require('../config/jwt');

const makeToken = (id) => {
  return jwt.sign({id}, jwtConfig.secret, {
    issuer: ISSUER,
    expiresIn: jwtConfig.tokenLife,
    subject: 'userInfo'
  });
};

module.exports = {
  getToken(req, res) {
    const {email, password} = req.body;

    return Users.findOne({
      where: {
        email
      }
    }).then(user => {
      if (!user) {
        return res.status(404).send({message: '등록된 이메일이 아닙니다.'});
      }
      const inputPassword = crypto.createHash('sha512').update(password + user.salt).digest('base64');
      if (user.password === inputPassword) {
        return res.status(200).send({token: makeToken(user.id)});
      } else {
        return res.status(403).send({message: '비밀번호가 일치하지 않습니다.'})
      }
    }).catch(error => res.status(400).send(error));
  },

  getNewToken(req, res) {
    try {
      const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], jwtConfig.secret);
      return res.status(200).send({token: makeToken(decodedToken.id)});
    } catch (error) {
      return res.status(401).send({message: '토큰이 유효하지 않습니다.'});
    }
  },
};
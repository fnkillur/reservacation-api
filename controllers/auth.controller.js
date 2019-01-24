const jwt = requires('jsonwebtoken');
const Users = require('../models').Users;

module.exports = {
    getToken(res, req) {
        return Users.findOne({
            where: {
                email: req.params.email
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: 'User not found' })
            }

            res.status(200).send(jwt.sign({
                id: user.id
            }, 'secret'));
        }).catch(error => res.status(400).send(error));
    },

    
};
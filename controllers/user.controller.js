const crypto = require('crypto');
const Users = require('../models').Users;

module.exports = {
    list(req, res) {
        return Users.findAll({
            order: [['id', 'DESC']]
        })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },

    getById(req, res) {
        return Users.findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({ message: 'User not found' });
                }

                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },

    register(res, req) {
        let salt = Math.round((new Date().valueOf() * Math.random())) + '';
        let hashPassword = crypto.createHash('sha512').update(req.params.password + salt).digest('hex');

        return Users.findOrCreate({
            where: {
                email: req.params.email
            },
            default: {
                password: hashPassword,
                salt: salt,
                name: req.params.name,
                role: req.params.role || 'user'
            }
        }).spread((user, created) => {
            if (created) {
                res.status(200).send(user);
            } else {
                res.status(400).send({ message: 'This email already exist' })
            }
        }).catch(error => res.status(400).send(error));;
    },

    update(req, res) {
        return Users.findByPk(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(404).send({ message: 'User not found' });
                }

                return user.update({
                    email: req.body.email || user.email,
                    password: req.body.password || user.password,
                    name: req.body.name || user.name,
                    role: req.body.role || user.role
                })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Users.findByPk(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(404).send({ message: 'User not found' });
                }

                return user.destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}
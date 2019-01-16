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

    add(req, res) {
        return Users.create()
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
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
                    name: req.body.name || user.name
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

                return user.destory()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}
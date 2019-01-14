const Stores = require('../models').Stores;

module.exports = {
    list(req, res) {
        return Stores.findAll({
            order: [['id', 'DESC']]
        })
            .then(stores => res.status(200).send(stores))
            .catch(error => res.status(400).send(error));
    },

    getById(req, res) {
        return Stores.findByPk(req.params.id)
            .then((store) => {
                if (!store) {
                    return res.status(404).send({ message: 'Store not found' });
                }

                return res.status(200).send(store);
            })
            .catch(error => res.status(400).send(error));
    }
};
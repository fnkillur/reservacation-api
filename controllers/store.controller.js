const Stores = require('../models').Stores;
const Reviews = require('../models').Reviews;
const Users = require('../models').Users;
const StoreImages = require('../models').StoreImages;

module.exports = {
    list(req, res) {
        return Stores.findAll({
            order: [['id', 'DESC']]
        })
            .then(stores => res.status(200).send(stores))
            .catch(error => res.status(400).send(error));
    },

    getById(req, res) {
        return Stores.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Reviews,
                include: {
                    model: Users,
                    attributes: ['id', 'name']
                }
            }, {
                model: StoreImages,
                attributes: ['id', 'src']
            }],
            order: [[Reviews, 'id', 'DESC'], [StoreImages, 'id', 'DESC']]
        })
            .then((store) => {
                if (!store) {
                    return res.status(404).send({ message: 'Store not found' });
                }

                return res.status(200).send(store);
            })
            .catch(error => res.status(400).send(error));
    },

    add: (req, res) => {
        let form = {
            email: req.body.email,
            sms: req.body.sms,
            address: req.body.address,
            detail_address: req.body.detail_address,
            store_name: req.body.store_name,
            ceo_name: req.body.ceo_name,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        };
        Stores
            .create(form)
            .then(partner => res.status(201).send(partner))
            .catch(error => res.status(400).send(error));
    },
};
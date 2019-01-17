const Stores = require('../models').Stores;
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
        return Stores.findAndCountAll({
            subQuery: false,
            where: {
                id: req.params.id
            },
            include: [{
                model: StoreImages,
                attributes: ['id', 'src'],
            }],
            order: [[Stores.associations.StoreImages, 'id', 'DESC']],
            limit: parseInt(req.query.perPageNo),
            offset: req.query.perPageNo * req.query.pageNo
        })
            .then(result => {
                let storeAndImages = {
                    store: result.rows[0],
                    images: {
                        count: (result.rows[0].StoreImages.length && result.count) || 0,
                        data: result.rows[0].StoreImages
                    }
                }
                return res.status(200).send(storeAndImages);
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
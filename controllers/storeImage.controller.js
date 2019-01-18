const StoreImages = require('../models').StoreImages;

module.exports = {
    getByStoreId(req, res) {
        return StoreImages.findAll({
            where: {
                store_id: req.params.storeId
            },
            order: [['id', 'DESC']],
            limit: parseInt(req.query.perPageNo, 10) || 20,
            offset: (req.query.perPageNo || 20) * req.query.pageNo
        })
            .then(storeImages => res.status(200).send(storeImages))
            .catch(error => res.status(400).send(error));
    }
};
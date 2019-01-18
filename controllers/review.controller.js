const Reviews = require('../models').Reviews;

module.exports = {
    getByStoreId(req, res) {
        return Reviews.findAndCountAll({
            where: {
                store_id: req.params.storeId
            },
            order: [['id', 'DESC']],
            limit: parseInt(req.query.perPageNo, 10) || 20,
            offset: (req.query.perPageNo || 20) * req.query.pageNo
        })
            .then(result => {
                let reviews = {
                    count: result.count,
                    data: result.rows
                }
                res.status(200).send(reviews)
            })
            .catch(error => res.status(400).send(error));
    }
};
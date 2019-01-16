const Reviews = require('../models').Reviews;

module.exports = {
    getByStoreId(req, res) {
        return Reviews.findAndCountAll({
            where: {
                storeId: req.params.storeId
            },
            order: [['id', 'DESC']],
            limit: parseInt(req.query.perPageNo, 10),
            offset: req.query.perPageNo * req.query.pageNo
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
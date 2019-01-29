const Reviews = require('../models').Reviews;

module.exports = {
    getByStoreId(req, res) {
        let perPageNo = parseInt(req.query.perPageNo || 20);
        let pageNo = parseInt(req.query.pageNo || 0);
        return Reviews.findAndCountAll({
            where: {
                store_id: req.params.storeId
            },
            order: [['id', 'DESC']],
            limit: perPageNo,
            offset: perPageNo * pageNo
        })
            .then(result => {
                let reviews = {
                    totalPageCount: Math.ceil(result.count / perPageNo),
                    data: result.rows
                }
                res.status(200).send(reviews)
            })
            .catch(error => res.status(400).send(error));
    }
};
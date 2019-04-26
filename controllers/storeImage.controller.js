const StoreImages = require('../models').StoreImages;

module.exports = {
  getByStoreId(req, res) {
    return StoreImages.findAll({
      where: {
        store_id: req.params.storeId
      },
      order: [['id', 'DESC']],
    })
      .then(storeImages => res.status(200).send(storeImages))
      .catch(error => res.status(400).send(error));
  }
};
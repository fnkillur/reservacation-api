const user = require('./user.controller');
const store = require('./store.controller');
const review = require('./review.controller');
const storeImage = require('./storeImage.controller');
const auth = require('./auth.controller');

module.exports = {
    user,
    store,
    review,
    storeImage,
    auth,
};
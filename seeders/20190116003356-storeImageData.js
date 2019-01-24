'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('StoreImages', [{
            storeId: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            storeId: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            storeId: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            storeId: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            storeId: 2,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            storeId: 2,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('StoreImages', null, {});
    }
};

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('StoreImages', [{
            store_id: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            store_id: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            store_id: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            store_id: 1,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            store_id: 2,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }, {
            store_id: 2,
            src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('StoreImages', null, {});
    }
};

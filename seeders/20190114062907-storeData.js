'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Stores', [{
            name: '스타벅스 아주대점',
            address: '경기도 수원시 팔달구 우만2동 월드컵로 205',
            phone: '031-215-4516',
            description: '카페',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            latitude: 37.279748,
            longitude: 127.043362,
            createdAt: '2019-01-14 15:30:00',
            updatedAt: '2019-01-14 15:30:00',
        }, {
            name: '탐앤탐스 수원아주대점',
            address: '경기도 수원시 영통구 원천동 아주로 46',
            phone: '031-211-3565',
            description: '24시 카페',
            latitude: 37.278954,
            longitude: 127.043953,
            imgSrc: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stores', null, {});
    }
};

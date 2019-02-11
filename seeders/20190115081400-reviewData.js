'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviews', [{
            store_id: 1,
            writer_id: 1,
            description: '리뷰입니다1',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다2',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다3',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다4',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다5',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다6',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다7',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다8',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '리뷰입니다9',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {});
    }
};


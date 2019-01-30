'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviews', [{
            store_id: 1,
            writer_id: 1,
            description: '뻥이야 존나맛없어.',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '이게 음식이야? 장사하기싫어?',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '모르겠다.',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '가볼만 한데 두번은 안감',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '맛있습니다.',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '맛있다 리뷰 30자 어케채우냐',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '그냥 그랬음 ㅇㅇ ㅇㅇㅇㅇ',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '배고프당 또먹고싶다',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            store_id: 1,
            writer_id: 2,
            description: '에베베베베베베베베베베베벱',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {});
    }
};


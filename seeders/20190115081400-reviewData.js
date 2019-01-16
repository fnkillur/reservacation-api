'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviews', [{
            storeId: 1,
            writerId: 1,
            title: '맛있어요.',
            description: '뻥이야 존나맛없어.',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '맛없네요 시발',
            description: '이게 음식이야? 장사하기싫어?',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '맛있나?',
            description: '모르겠다.',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '한번정도는...',
            description: '가볼만 한데 두번은 안감',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '가볼만 하긴 하네요',
            description: '맛있습니다.',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '맛있었어요!',
            description: '맛있다 리뷰 30자 어케채우냐',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '그냥저냥',
            description: '그냥 그랬음 ㅇㅇ ㅇㅇㅇㅇ',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '우헤헤헤헷',
            description: '배고프당 또먹고싶다',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }, {
            storeId: 1,
            writerId: 2,
            title: '야룰얄루양울',
            description: '에베베베베베베베베베베베벱',
            imgSrc: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            createdAt: '2019-01-15 15:30:00',
            updatedAt: '2019-01-15 15:30:00',
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {});
    }
};


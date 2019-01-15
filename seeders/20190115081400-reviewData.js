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
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};


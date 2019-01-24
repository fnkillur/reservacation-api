'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email: 'test1@naver.com',
            password: 'test1',
            name: '테스트1',
            createdAt: '2019-01-13',
            updatedAt: '2019-01-13'
        }, {
            email: 'test2@naver.com',
            password: 'test2',
            name: '테스트2',
            createdAt: '2019-01-13',
            updatedAt: '2019-01-13'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};

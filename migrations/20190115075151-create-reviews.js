'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Reviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            store_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            writer_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            img_src: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
                charset: 'utf8mb4',
                collate: 'utf8mb4_unicode_ci'
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Reviews');
    }
};
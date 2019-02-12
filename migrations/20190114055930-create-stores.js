'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Stores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            store_name: {
                type: Sequelize.STRING
            },
            store_description: {
                type: Sequelize.TEXT
            },
            store_tel: {
                type: Sequelize.STRING
            },
            img_src: {
                type: Sequelize.STRING
            },
            latitude: {
                allowNull: false,
                type: Sequelize.DECIMAL(13, 10)
            },
            longitude: {
                allowNull: false,
                type: Sequelize.DECIMAL(13, 10)
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            detail_address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ceo_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ceo_sms: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ceo_email: {
                allowNull: false,
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
        return queryInterface.dropTable('Stores');
    }
};
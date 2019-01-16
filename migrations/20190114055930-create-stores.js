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
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            detail_address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            sms: {
                allowNull: false,
                type: Sequelize.STRING
            },
            store_name: {
                type: Sequelize.STRING
            },
            store_description: {
                type: Sequelize.TEXT
            },
            ceo_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            imgSrc: {
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Stores');
    }
};
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reviews = sequelize.define('Reviews', {
        store_id: DataTypes.INTEGER,
        writer_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        img_src: DataTypes.STRING
    }, {});
    Reviews.associate = (models) => {
        Reviews.belongsTo(models.Stores, {
            foreignKey: 'store_id'
        });
        Reviews.belongsTo(models.Users, {
            foreignKey: 'writer_id'
        });
    };
    return Reviews;
};
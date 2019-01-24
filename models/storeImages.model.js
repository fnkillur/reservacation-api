'use strict';
module.exports = (sequelize, DataTypes) => {
    const StoreImages = sequelize.define('StoreImages', {
        store_id: DataTypes.INTEGER,
        src: DataTypes.STRING
    }, {});
    StoreImages.associate = (models) => {
        StoreImages.belongsTo(models.Stores, {
            foreignKey: 'store_id'
        });
    };
    return StoreImages;
};
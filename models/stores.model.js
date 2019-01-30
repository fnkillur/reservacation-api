'use strict';
module.exports = (sequelize, DataTypes) => {
    const Stores = sequelize.define('Stores', {
        store_name: DataTypes.STRING,
        store_description: DataTypes.TEXT,
        store_tel: DataTypes.STRING,
        img_src: DataTypes.STRING,
        address: DataTypes.STRING,
        detail_address: DataTypes.STRING,
        latitude: DataTypes.DECIMAL(13, 10),
        longitude: DataTypes.DECIMAL(13, 10),
        ceo_name: DataTypes.STRING,
        ceo_sms: DataTypes.STRING,
        ceo_email: DataTypes.STRING
    }, {});
    Stores.associate = models => {
        Stores.hasMany(models.Reviews, {
            foreignKey: 'store_id',
            sourceKey: 'id'
        });
        Stores.hasMany(models.StoreImages, {
            foreignKey: 'store_id',
            sourceKey: 'id'
        });
    };
    return Stores;
};
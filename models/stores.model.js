'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define('Stores', {
    address: DataTypes.STRING,
    detail_address: DataTypes.STRING,
    sms: DataTypes.STRING,
    email: DataTypes.STRING,
    ceo_name: DataTypes.STRING,
    store_name: DataTypes.STRING,
    store_description: DataTypes.TEXT,
    imgSrc: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(13,10),
    longitude: DataTypes.DECIMAL(13,10)
  }, {});
  Stores.associate = (models) => {
    Stores.hasMany(models.Reviews, {
      foreignKey: 'storeId',
      sourceKey: 'id'
    });
    Stores.hasMany(models.StoreImages, {
      foreignKey: 'storeId',
      sourceKey: 'id'
    });
  };
  return Stores;
};
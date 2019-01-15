'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define('Stores', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgSrc: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(13,10),
    longitude: DataTypes.DECIMAL(13,10)
  }, {});
  Stores.associate = (models) => {
    Stores.hasMany(models.Reviews, {
      foreignKey: 'storeId',
      sourceKey: 'id'
    });
  };
  return Stores;
};
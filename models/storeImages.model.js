'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreImages = sequelize.define('StoreImages', {
    storeId: DataTypes.INTEGER,
    src: DataTypes.STRING
  }, {});
  StoreImages.associate = (models) => {
    StoreImages.belongsTo(models.Stores, {
      foreignKey: 'storeId'
    });
  };
  return StoreImages;
};
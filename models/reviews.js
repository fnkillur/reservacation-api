'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    storeId: DataTypes.INTEGER,
    writerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imgSrc: DataTypes.STRING
  }, {});
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.Stores, {
      foreignKey: 'storeId'
    });
    Reviews.belongsTo(models.Users, {
      foreignKey: 'writerId'
    });
  };
  return Reviews;
};
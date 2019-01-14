'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define('Stores', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgsrc: DataTypes.STRING
  }, {});
  return Stores;
};
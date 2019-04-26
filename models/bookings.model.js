'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    store_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    customer_count: DataTypes.INTEGER
  }, {});
  return Bookings;
};
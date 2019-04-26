'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Users.associate = models => {
    Users.hasMany(models.Reviews, {
      foreignKey: 'writer_id',
      sourceKey: 'id'
    });
  };
  return Users;
};
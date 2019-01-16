'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Reviews, {
      foreignKey: 'writerId',
      sourceKey: 'id'
    });
  };
  return Users;
};
'use strict';
module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('User', {

    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    tableName: "users"
  });


  
  return users;

};
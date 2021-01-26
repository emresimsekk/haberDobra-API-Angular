'use strict';
module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('News', {

    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdByID:{
      
      type: DataTypes.INTEGER
    },
    modifiedByID:{
     
      type: DataTypes.INTEGER
    },

  }, {
    tableName: "News"
  });


  
  return users;

};
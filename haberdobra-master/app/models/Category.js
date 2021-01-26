'use strict';
module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('Category', {

    name: {
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
    tableName: "Categories"
  });


  
  return users;

};
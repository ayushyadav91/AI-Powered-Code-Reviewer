const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

const User = sequelize.define('user', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    
});

module.exports = User;
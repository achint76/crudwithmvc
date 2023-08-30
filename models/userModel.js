const sequelize = require('../db/config');
const {DataTypes} = require('sequelize');
const User = sequelize.define('userinfo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        defaultValue: null,
        allowNull: true
    }
},{
    tableName:'userinfo',
    timestamps: false
});

module.exports = User;
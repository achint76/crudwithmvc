const sequelize = require('../db/config');
const User = require('./userModel');

sequelize.sync();
module.exports = {
    User
};
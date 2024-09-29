const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false 
});


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

const db = { sequelize, User, Address };

module.exports = db;

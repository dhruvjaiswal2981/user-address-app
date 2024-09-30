const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', 
    logging: false, 
});


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });


const db = { sequelize, User, Address };

module.exports = db;

const conn = require('./conn');
const { Sequelize }  = conn;

const User = conn.define('users',
    {
        name: {
            type: Sequelize.STRING
        }
    }

);

User.belongsTo(User, {as: 'manager'})
User.hasMany(User, {as: 'employees', foreignKey:'managerId'})

module.exports = User;
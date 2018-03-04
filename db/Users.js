const conn = require('./conn');
const { Sequelize }  = conn;

const User = conn.define('users',
    {
        name: {
            type: Sequelize.STRING
        }
    }

);

module.exports = User;
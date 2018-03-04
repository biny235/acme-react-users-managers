const conn = require('./conn');
const User = require('./Users');

const sync = ()=>{
    return conn.sync({force:true});
}

const seed = ()=>{
    return Promise.all([
        User.create({name: "Joe"}),
        User.create({name: "John",  managerId: 1}),
        User.create({name: "Moe", managerId: 1})
    ])
}


module.exports = {
    conn,
    seed,
    sync,
    models:{
        User
    }
}
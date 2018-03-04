const conn = require('./conn');
const User = require('./Users');

const sync = ()=>{
    return conn.sync({force:true});
}

const seed = ()=>{
    return Promise.all([
        User.create({name: "Joe"}),
        User.create({name: "John"})
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
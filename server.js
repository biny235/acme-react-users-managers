const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { User } = db.models;

db.sync()
    .then(()=>{
        return db.seed()
    })
    .then(()=>{
        console.log('db seeded')
    })

const port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res, next ) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.get('/api/users', (req, res, next)=>{
    User.findAll({include: [
        { model: User, as: 'manager' },
        { model: User, as: 'employees' }
        ]})
        .then(users => res.send(users))
        .catch(next)
})

app.listen(port, ()=> console.log(`listening on ${port}`));
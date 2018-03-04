const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

db.sync()
    .then(()=>{
        return db.seed()
    })
    .then(()=>{
        console.log('db seeded')
    })

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/api/users', (req, res, next)=>{
    
})

app.listen(port, ()=> console.log(`listening on ${port}`));
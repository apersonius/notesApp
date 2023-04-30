const router = require('express').Router();
const fs = require('fs');

var uniqid = require('uniqid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db/json'));
    })
};

    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.JSON(db)

        let userNote = {
            title: req.body.title,
            text: req.body.text,

            id: uniqid(),
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.JSON(db);
    });

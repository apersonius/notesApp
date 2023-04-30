const app = require('express').Router();
const fs = require('fs');

var uniqid = require('uniqid');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db/json'));
    })
};

    app.post('/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = json.parse(db);
        res.json(db)

        let userNote = {
            title: req.body.title,
            text: req.body.text,

            id: uniqid(),
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.JSON(db);
    });

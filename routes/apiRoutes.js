const fs = require("fs");
const notes = require("../db/db");

module.exports = function(app) {

    // grabs info from the db.json file
    app.get("/api/notes", function(req, res) {
        const notes = JSON.parse(data);
        res.json(notes);
    });


    // adds info to db.json file
    app.post("/api/notes", function(req, res) {
        tableData.push(req.body);
        res.json(notes);
    });

    app.delete("/api/notes/:id", function(req, res) {

    });


}
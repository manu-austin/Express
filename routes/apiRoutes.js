const notes = require("../db/db");


module.exports = function(app) {

    // grabs info from the db.json file
    app.get("/api/notes", function(req, res) {
        const notes = JSON.parse(data);
        return res.json(notes);
    });


    // adds info to db.json file
    app.post("/api/notes", function(req, res) {
        var newTask = req.body;
        notes.push(req.body);
        res.json(newTask);
    });

    app.delete("/api/notes/:id", function(req, res) {
        // grabs selected id to be deleted
        const deleteID = req.params.id

        // Filter to find only the selected id
        for (var i = 0; i < deleteID.length; i++) {
            if (chosen === deleteID[i].routeName) {
                //needs to be replaced by delete return res.json(characters[i]);
            }
        }
        // message if no id found
        return res.send("No task found");
    });
}
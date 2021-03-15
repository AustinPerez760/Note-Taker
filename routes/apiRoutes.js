const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = (note) => {
  note.get("/api/notes", function (req, res) {
    res.json(db);
  });

  note.post("/api/notes", (req, res) => {
    let id = uuidv4();
    let postNote = {
      id: id,
      title: req.body.title,
      text: req.body.text,
    };
    db.push(postNote);

    fs.writeFile("../db/db.json", JSON.stringify(db), (error) => {
      console.log("added note");
    });
    res.json(db);
  });

  note.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    for (const i in db) {
      if (db[i].id === id) {
        db.splice(i, 1);
        break;
      }
    }

    fs.writeFile("../db/db/.json", JSON.stringify(db), (error) => {
      res.send(console.log("note deleted"));
    });
  });
};

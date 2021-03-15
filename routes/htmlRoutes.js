const path = require("path");
const fs = require("fs");
//Home page route
module.exports = (app) => {
  app.get("/", function (req, res) {
    res.sendFile(path.joinn(__dirname, "../public/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};

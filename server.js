const express = require("express");
const path = require("path");

// Sets up Express
const app = express();
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Initiates server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

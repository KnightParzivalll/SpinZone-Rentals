const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.get("/index.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.get("/rent.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/rent.html"));
});

app.use('/public', express.static('src/public'))

app.listen(port);
console.log("Server started at http://localhost:" + port);

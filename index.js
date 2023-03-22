"use strict";

var express = require("express");

var app = (module.exports = express());

app.get("/", function (req, res) {
  res.send("Hello Everybody!");
});

if (!module.parent) {
  app.listen(80);
  console.log("Express started on port 80");
}

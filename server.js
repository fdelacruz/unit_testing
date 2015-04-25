var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  res.render("index", { palette: ["#cccccc", "#900455", "#0055ff"] });
});

app.listen(3000, function() {
	console.log('Running on Port: ' + port);
});

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var mainCtrl = require("./interestCtrl");

app.listen(8080, function(req, res, next){
	console.log("running on 8080");
});

app.use(express.static(__dirname+'/public'));

app.get("/interest_rate", mainCtrl.getInterestRate)
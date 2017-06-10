var express = require("express");
var app = express();

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Toni", "Maria", "Victor", "Clara"]; // we move this array to the global scope so both routes get"/friends" and post"addfriend" can access it (soon we'll be using a database instead)

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    friends.push(req.body.newfriend); //"newfriend" matches the name attribute from the form
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!");
});
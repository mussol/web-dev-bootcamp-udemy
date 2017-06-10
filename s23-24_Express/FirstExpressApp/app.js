var express = require("express");
var app = express(); //in express there are several methods, unlike eg cat-me

// "/" => "Hi there!"
app.get("/", function(req, res) { //request/response are objects
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Bye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to '/dog'");
    res.send("MEOW!");
});

app.get("/r/:category", function(req, res) {
    var category = req.params.category;
    res.send("WELCOME TO THE " + category.toUpperCase() + " CATEGORY!");
});

// "*" when trying to access a route not defined. ORDER MATTERS
app.get("*", function(req, res) {
    res.send("This page does not exist");
});

//starting server: must tell express to listen to requests from a particular post and IP (defined by cloud9)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});

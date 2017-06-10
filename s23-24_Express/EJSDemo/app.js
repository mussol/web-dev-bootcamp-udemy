var express = require("express");
var app = express();

app.use(express.static("public")); //tell express explicitly to serve the 'public' directory so we can link to its contents eg app.css styles
app.set("view engine", "ejs"); //tell express that all our template files will be .ejs

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingEJS: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title:"Post 1", author:"Author 1"},
        {title:"Post 2", author:"Author 2"},
        {title:"Post 3", author:"Author 3"}
    ];
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!");
});
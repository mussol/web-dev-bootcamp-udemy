var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public")); //so we can serve our customised stylesheets (public folder)
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer()); //must come after bodyParser

//MONGOOSE/MODEL CONFIG 
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, //could give a default image like this: {type: String, default: "placeholderimage.jpeg"}
    body: String,
    created: {type: Date, default: Date.now()} //setting default value
});
var Blog = mongoose.model("Blog", blogSchema);

//First creation of a blog post:
// Blog.create({
//     title: "Test blog",
//     image: "https://source.unsplash.com/KeUKM5N-e_g",
//     body: "This is a blog post."
// });

//RESTFUL ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

//NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res) {
    //sanitize the body text of the blog post
    req.body.blog.body = req.sanitize(req.body.blog.body);
    //create blog --> Blog.create(data, callback)
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            //then, redirect to index
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    //sanitize the body text of the blog post
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            res.redirect("index");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    }); //params: id, newData, callback
});

//DESTROY ROUTE
app.delete("/blogs/:id", function(req, res) {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            //then, redirect somewhere
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server is running");
});
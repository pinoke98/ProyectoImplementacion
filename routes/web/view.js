var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.render("routes_views/index");
});

router.get("/Fibonacci",function(req,res){
    res.render("routes_views/Fibonacci")
});

router.get("/Factorial",function(req,res){
    res.render("routes_views/Factorial")
});

router.get("/Triangulo",function(req,res){
    res.render("routes_views/Triangulo")
});

router.get("/Circulo",function(req,res){
    res.render("routes_views/Circulo")
});

router.get("/Rectangulo",function(req,res){
    res.render("routes_views/Rectangulo")
});

module.exports = router;
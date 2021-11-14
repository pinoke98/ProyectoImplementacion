var express = require("express");
var valFibonacci = require("../../validation/validationFibonacci");
var valFactorial = require("../../validation/validationFactorial");
var valTriangulo = require("../../validation/validationTriangulo");
var valCirculo = require("../../validation/validationCirculo");
var valRectangulo = require("../../validation/validationRectangulo");
var router = express.Router();

router.post("/CalcFibonacci",function(req,res,next){
    //console.log("Se ha hecho un Post")
    //res.send("Se ha hecho un Post")
    //console.log(req.body)
    var nNumber = req.body.Nnumber2;
    var result = valFibonacci(nNumber);
    result = {'result':result}
    //console.log(result);
    res.send(result);
})

router.post("/CalcFactorial",function(req,res,next){
    var nNumber = req.body.Nnumber1;
    var result = valFactorial(nNumber);
    result = {'result':result.toString()};
    //console.log(result);
    res.send(result);
})

router.post("/CalcTriangulo",function(req,res,next){
    var lado1 = req.body.lado1;
    var lado2 = req.body.lado2;
    var lado3 = req.body.lado3;
    var result = valTriangulo(lado1,lado2,lado3);
    //console.log(result);
    res.send(result);
})

router.post("/CalcCirculo",function(req,res,next){
    var radio = req.body.Radio;
    var result = valCirculo(radio);
    //console.log(result);
    //res.redirect("/Circulo");
    res.send(result);
})

router.post("/CalcRectangulo",function(req,res,next){
    var ancho = req.body.Ancho;
    var largo = req.body.Largo;
    var result = valRectangulo(ancho,largo);
    console.log(result);
    res.send(result);
})

module.exports = router;
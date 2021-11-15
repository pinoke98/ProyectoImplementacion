var CalcCirculo = require("../calculations/calculationsCirculo");

function valCirculo(radio){
    radio = parseFloat(radio)
    console.log(radio)
    if(isNaN(radio)){
        ancho = 0
    }
    if (radio < 0){
        return {'area':'No hay area porque hay valores negativos','perimetro':'No hay perimetro porque hay valores negativos'};
    }else if(radio > parseFloat(1e300)){
        return {'area':'El numero es demasiado grande para calcular','perimetro':'El numero es demasiado grande para calcular'}
    }else if(radio == 0){
        return {'area':'El circulo no existe','perimetro':'El circulo no existe'}
    }
    return CalcCirculo(radio);
}

module.exports = valCirculo;
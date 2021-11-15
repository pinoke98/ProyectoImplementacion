var CalcRectangulo = require("../calculations/calculationsRectangulo");

function valRectangulo(ancho,largo){
    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
    if(isNaN(ancho)){
        ancho = 0
    }
    if(isNaN(largo)){
        largo = 0
    }
    if(ancho<0||largo<0){
        return {'area':'No hay area porque hay valores negativos','perimetro':'No hay perimetro porque hay valores negativos'};
    }if(ancho>parseFloat(1e300)||largo>parseFloat(1e+300)){
        return {'area':'Los numeros son demasiado grande para calcular','perimetro':'Los numeros son demasiado grande para calcular'}
    }else if(ancho==0||largo==0){
        return {'area':'El rectangulo no existe','perimetro':'El rectangulo no existe'};
    }return CalcRectangulo(ancho,largo);
}

module.exports = valRectangulo;
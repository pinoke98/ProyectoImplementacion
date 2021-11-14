var CalcRectangulo = require("../calculations/calculationsRectangulo");

function valRectangulo(ancho,largo){
    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
    console.log(ancho);
    console.log(largo);
    if(ancho<0||largo<0){
        return {'area':'No hay area porque hay valores negativos','perimetro':'No hay perimetro porque hay valores negativos'};
    }
    return CalcRectangulo(ancho,largo);
}

module.exports = valRectangulo;
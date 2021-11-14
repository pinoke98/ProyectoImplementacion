var CalcCirculo = require("../calculations/calculationsCirculo");

function valCirculo(radio){
    radio = parseFloat(radio)
    console.log(radio)
    if (radio < 0){
        return {'area':'No hay area porque hay valores negativos','perimetro':'No hay perimetro porque hay valores negativos'};
    }
    return CalcCirculo(radio);
}

module.exports = valCirculo;
var CalcFactorial = require("../calculations/calculationsFactorial")

function valFactorial(nNumber){
    if(isNaN(nNumber)){
        nNumber = 0
    }
    if(nNumber<0){
        return "No se admiten numeros negativos"
    }else if(nNumber>1000){
        return "El numero es demasiado grande como para mostrarlo en pantalla"
    }
    nNumber = BigInt(nNumber);
    return CalcFactorial(nNumber);
}

module.exports = valFactorial;
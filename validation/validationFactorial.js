var CalcFactorial = require("../calculations/calculationsFactorial")

function valFactorial(nNumber){
    if(nNumber<0){
        return "No de admiten numeros negativos"
    }
    nNumber = BigInt(nNumber);
    return CalcFactorial(nNumber);
}

module.exports = valFactorial;
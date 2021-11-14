var CalcFibonacci = require("../calculations/calculationsFibonacci")

/*function valFibonacci(nNumber){
    if(nNumber<0){return "No se admiten numeros negativos"}
    return CalcFibonacci(nNumber);
}*/

function valFibonacci(nNumber){
    if(nNumber<0){
        return "No se admiten numeros negativos"
    }else if(nNumber == 0){
        return 'No se genero la serie';
    }else if(nNumber == 1){
        return '0';
    }
    var result = CalcFibonacci(nNumber);
    //console.log("Validacion: "+result);
    return result;
}

module.exports = valFibonacci;
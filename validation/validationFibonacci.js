var CalcFibonacci = require("../calculations/calculationsFibonacci")

/*function valFibonacci(nNumber){
    if(nNumber<0){return "No se admiten numeros negativos"}
    return CalcFibonacci(nNumber);
}*/

function valFibonacci(nNumber){
    if(isNaN(nNumber)){
        nNumber = 0
    }
    if(nNumber<0){
        return "No se admiten numeros negativos"
    }else if(nNumber == 0){
        return 'No se genero la serie';
    }else if(nNumber == 1){
        return '0';
    }else if(nNumber>100000){
        return 'La serie es demasiado grande como para mostrarla en pantalla'
    }
    var result = CalcFibonacci(nNumber);
    //console.log("Validacion: "+result);
    return result;
}

module.exports = valFibonacci;
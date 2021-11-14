var CalcTriangulo = require("../calculations/calculationsTriangulo");

function valTriangulo(lado1,lado2,lado3){
    lado1 = parseFloat(lado1);
    lado2 = parseFloat(lado2);
    lado3 = parseFloat(lado3);
    console.log(lado1+lado2)
    if(lado1<0||lado2<0||lado3<0){
        return {'area':'No hay area porque hay valores negativos','perimetro':'No hay perimetro porque hay valores negativos'};
    }else if((lado1+lado2)<=lado3||(lado2+lado3)<=lado1||(lado3+lado1)<=lado2){
        return {'area':'El triangulo no existe','perimetro':'El triangulo no existe'};
    }
    return CalcTriangulo(lado1,lado2,lado3);
}

module.exports = valTriangulo;
function CalcCirculo(lado1,lado2,lado3){
    const per = lado1+lado2+lado3;
    const s = per/2;
    const a = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
    return {'area':'Area: '+a.toString(),'perimetro':'Perimetro: '+per.toString()}
}

module.exports = CalcCirculo;
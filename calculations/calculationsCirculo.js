function CalcCirculo(radio){
    const a = Math.pow(radio,2)*Math.PI;
    const per = 2*Math.PI*radio;
    return {'area':'Area: '+a.toString(),perimetro:'Perimetro: '+per.toString()};
}

module.exports = CalcCirculo;
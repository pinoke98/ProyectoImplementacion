function CalcRectangulo(ancho,largo){
    var a = ancho*largo;
    var per = 2*ancho+2*largo;
    return {'area':'Area: '+a.toString(),perimetro:'Perimetro: '+per.toString()};
}

module.exports = CalcRectangulo;
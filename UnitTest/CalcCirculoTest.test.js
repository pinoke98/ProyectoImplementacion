const CalcCirculo = require('../calculations/calculationsCirculo');

test('Se prueba el area y el perimetro de un circulo de radio 15', () =>{
    expect(
        CalcCirculo(15)['area']
        ).toBe('Area: 706.8583470577034')
    expect(
        CalcCirculo(15)['perimetro']
        ).toBe('Perimetro: 94.24777960769379')
})

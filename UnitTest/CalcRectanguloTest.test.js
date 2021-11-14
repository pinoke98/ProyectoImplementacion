const CalcRectangulo = require('../calculations/calculationsRectangulo')

test('Se prueba el area y el perimetro de un circulo de largo 15 y ancho 10', () =>{
    expect(
        CalcRectangulo(10,15)['area']
        ).toBe('Area: 150')
    expect(
        CalcRectangulo(10,15)['perimetro']
        ).toBe('Perimetro: 50')
})
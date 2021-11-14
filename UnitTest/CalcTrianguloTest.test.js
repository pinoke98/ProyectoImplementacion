const CalcTriangulo = require('../calculations/calculationsTriangulo')

test('Se prueba el area y el perimetro de un circulo de lado1 3, lado2 4 y lado3 5', () =>{
    expect(
        CalcTriangulo(3,4,5)['area']
        ).toBe('Area: 6')
    expect(
        CalcTriangulo(3,4,5)['perimetro']
        ).toBe('Perimetro: 12')
})
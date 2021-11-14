const CalcFactorial = require('../calculations/calculationsFactorial')

test('Se prueba el factorial de 20', () => {
    var val = BigInt(2432902008176640000)
    var val2 = BigInt(20)
    expect(
        CalcFactorial(val2)
    ).toBe(val)
})
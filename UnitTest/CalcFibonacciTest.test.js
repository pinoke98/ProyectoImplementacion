const CalcFibonacci = require('../calculations/calculationsFibonacci')

test('Se prueba lo 15 primeros numeros de fibonacci', () => {
    var val = '0-1-1-2-3-5-8-13-21-34-55-89-144-233-377'
    expect(
        CalcFibonacci(15)
    ).toBe(val)
})
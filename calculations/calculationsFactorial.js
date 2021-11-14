function CalcFactorial(n){
    return (n==0n||n==1n)?1n:CalcFactorial(n-1n)*n;
}

module.exports = CalcFactorial;
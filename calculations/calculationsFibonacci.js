/*function CalcFibonacci(nNumber){
    if (nNumber <= 1) return 1;
    return CalcFibonacci(nNumber - 1) + CalcFibonacci(nNumber - 2);
}*/

function CalcFibonacci(nNumber){
    let n1 = 0, n2 = 1, nextTerm,cont = 2, result = '';
    result = result+n1.toString()+"-"+n2.toString()
    nextTerm = n1 + n2;
    while (cont <= nNumber-1) {
        result = result+"-"+nextTerm.toString();
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        cont++;
    }
    //console.log(result)
    return result;
}

module.exports = CalcFibonacci;

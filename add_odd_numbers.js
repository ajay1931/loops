function addOddNmubers(n) {
    var oddnumber=0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            oddnumber += i;
        }
    }
    return oddnumber
}
var n=9;
var input=addOddNmubers(n)
console.log(input)
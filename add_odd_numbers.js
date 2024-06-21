function addOddNmubers(n) {
    let oddnumber = 0;
    let arr = [];
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            oddnumber += i;
            arr.push(oddnumber);
            

        }
    }
    return arr;
}
var input = addOddNmubers(9)
console.log(input)
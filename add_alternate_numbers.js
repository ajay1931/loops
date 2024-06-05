

function addAlternateNumbers(arr) {
    var add = 0
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            add += i;
        }

    }
    return add;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var result = addAlternateNumbers(arr)
console.log(result)
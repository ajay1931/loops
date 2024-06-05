var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addEvenNumbers() {
    var add = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            add += arr[i];
        }
    }
    return add;
}
var result = addEvenNumbers(arr);
console.log(result);
var arr = [1, 2, 3, 10, 5]
var add = 0
function sum() {
    for (var i = 0; i < arr.length; i++) {
        add += arr[i]
    }
    console.log(add)
}
sum()
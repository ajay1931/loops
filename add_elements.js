// var arr = [1, 2, 3, 10, 7]
// var add = 0
// function sum() {
//     for (var i = 0; i < arr.length; i++) {
//         add += arr[i]
//     }
//     console.log(add)
// }
// sum()


var arr1 = [1, 2, 3, 10, 7]
var arr2 = [1, 2, 3, 4, 5]
var arr3 = [0, 0, 3, 10, 7]

function addarray(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        
    }
    return total;
}
var arraytotal1 = addarray(arr1)
var arraytotal2 = addarray(arr2)
var arraytotal3 = addarray(arr3)
console.log("result " + arraytotal1)
console.log("result " + arraytotal2)
console.log("result " + arraytotal3)

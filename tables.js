// var row = 10;
// var cols = 2
// for (var i = 1; i <= row; i++) {

//     console.log((i + "*" + cols) + "=" + i * cols)
// }



var col1 = 1;
var col2 = 2;
var col3 = 3;

function multiplicationTables(col){
    var tables=0;
    for(var i=1;i<=10;i++){
        tables =(i + "*" + col) + "=" + i * col;
        console.log(tables)
    }
}
multiplicationTables(col1);
multiplicationTables(col2);
multiplicationTables(col3);


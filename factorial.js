function factorial(n){
    var multiple=1;
    for(var i=1;i<=n;i++){
        multiple =i*multiple;
        console.log(multiple)
    }
    return multiple;
}
var n=5;
var input=factorial(n);
console.log(input)
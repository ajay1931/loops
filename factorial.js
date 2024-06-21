function factorial(n){
    let multiple=1;
    let arr=[]
    for(var i=1;i<=n;i++){
        multiple =i*multiple;
        arr.push(multiple)
        console.log(arr)
    }
    return multiple;
}
var n=5;
var input=factorial(n);
console.log(input)
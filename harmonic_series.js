function harmonicSeries(n) {
   let calc = 0;
   let arr = [];
   for (var i = 1; i <= n; i++) {
      calc += 1 / i;
      arr.push(calc);

   }
   return arr;
}
let input = harmonicSeries(5);
console.log(input);
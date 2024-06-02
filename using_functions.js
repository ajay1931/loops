// function greetings(name) {
//     console.log("HI " + name)
// }
// greetings("ram")


function greetings(name, isMorning) {
    if (isMorning) {
        console.log("Hi.good morning " + name)
    } else {
        console.log("Hi.good evening " + name)
    }
}
greetings("ram", false)



function result(tiffen, lunch, dinner) { //inside the bracket called parameters
    let sum = tiffen + lunch + dinner
    console.log("total expense:" + sum)
}
result(25, 50, 25) //inside the bracket called arguments


function res(tiffen,lunch,dinner){
   
    return tiffen+lunch+dinner
}
var add=res(50,200,50)
console.log("total expense: "+add)
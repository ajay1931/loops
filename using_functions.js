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

function result(tiffen,lunch,dinner){
    let sum=tiffen + lunch + dinner
    console.log("total expense:" + sum)
}
result(25,50,25)
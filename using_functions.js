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
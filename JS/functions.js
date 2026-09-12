var a = 23
var b = 34
var c = 27
var d = 67
var e = 89

// function evenOdd(x) {
//     if (x % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// function add(x,y){
//     return x+y;
// }
var stuName = "Neha";

function greeting() {
    console.log("Hello");
}
function greeting2(name) {
    console.log("Hello", name);
}
function greeting3(name="Guest") {
    console.log("Hello", name);
}


greeting()
greeting2(stuName)
greeting3()


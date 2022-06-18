// Continuación de repaso de funciones en JavaScript

var dasd = "asdasd"
let reservado = "ASDd"

function myFuction() {
    // ALL THE VARIABLE THAT YOUR CREATE ON A FUNCTION 
    // ONLY CAN BE CALL BY THE SAME FUNCTION
    var myVar = "asdasd"
    console.log(`${myVar}`)
}

myFuction()
// console.log(myVar) ERROR: myVar is not defined

if (true) {
    let person = {
        name: "Aaron",
        lastname: "Calixto"
    }
    console.log(person)
}

function sumar(n, m) {
    return n + m
}

// console.log(person) ERROR: person is not defined
// num * num = num^2 
const square = function(number) { 
    return number * number
}

console.log(square(4)) // 16

const factorial = function fac(n) {
    console.log(`El valor de n ahora es de: ${n}`)
    return n < 2 ? 1 : n * fac(n - 1) 
}

console.log(factorial(4))

let myNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function myOwnFilter(numbers /* Array of numbers*/, myFunction /* function */) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
        result[i] = myFunction(numbers[i])
    }
    return result
}

function isPair(number) { return number % 2 == 0 && number != 0 }
function isDisPair(number) { return number % 2 != 0 && number != 0 }
function isFiveMultilpe(number) {return number % 5 == 0 && number != 0}

function onlyPairs(numbers, filter) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
        if(filter(numbers[i])) {
            result[i] = numbers[i]
        }
    }
    return result
}

console.log(myOwnFilter(myNumbersArray, square))
console.log(onlyPairs(myNumbersArray, isPair))
console.log(onlyPairs(myNumbersArray, isDisPair))
console.log(onlyPairs(myNumbersArray, isFiveMultilpe))
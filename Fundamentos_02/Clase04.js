

// Funciones
// Una función es una manera práctica, eficiente y efectiva de hacer llamar un mismo
// bloque de código de una forma rápida y legible (que sea fácil de entender para humanos).

/* console.log(nombre)

var nombre = "Calixto"
 
// 01. Inicia función saludar (Buscar)
saludar() // 06. Terminé Saludar
console.log("Función completa terminada")

// 02. Encontré la función saludar y ejecutar lo que tenga
function saludar() {
    console.log(`Hola ${nombre}, ¿cómo estás?`)
    if (nombre == 'Calixto') {
        console.log("Estudia más, prro")
    } else {
        console.log("Adiós")
    }
    // 03. Inicia función mostrarMensajeAlFinalizarFuncion (Buscar)
    mostrarMensajeAlFinalizarFuncion() // 05. Terminé la función mostrarMensajeAlFinalizarFuncion
    console.log("Función dos terminada")
}

// 04. Encontré función mostrarMensajeAlFinalizarFuncion y ejecutar
function mostrarMensajeAlFinalizarFuncion() {
    console.log("Terminé de hacer la función")
}

*/

var numA = 5
var numB = 10
var numC = 20

sumar(numA /* n = 5 */, numC /* m = 20 */)
sumar(numA /* n = 5 */, numB /* m = 10 */)
sumar(numB /* n = 10 */, numC /* m = 20 */)
sumar(12, 41)
sumar(23, 31)
resta(30, 1)

multiplicar(2, 4)

var result = dividir(10,5)

var nombres = ["Aarón", "Calixto", "nany", "souza", "Juan", "Pedro"]

if (isNameToFindFinded("nany")) {
    console.log("Exitoso")
} else {
    console.log("No se encuentra")
}

function isNameToFindFinded(nameToFind) {
    for (var nombre of nombres) {
        if (nombre == nameToFind) {
            return true
        }
        console.log(nombre)
    }
}

console.log(result)

let primitiveA = "String"
let primitiveB = 212
let primitiveC = true

let myCar = {
    model: "Mercedez",
    year: 2021,
    isAvaiable: true
}

sellMyCarAgain(primitiveC)
console.log(primitiveC)
sellMyCar(myCar)
console.log(myCar.isAvaiable)


function sellMyCar(car) {
    console.log("Se vendió el carro (CAMBIÉ EL VALOR ACCEDIENDO PRIMERO AL OBJETO)")
    car.isAvaiable = false
}

function sellMyCarAgain(isAvaiable) {
    console.log("Se vendió el carro (CON VALOR PRIMITIVO)")
    isAvaiable = false
    console.log(isAvaiable)
}


function sumar(n, m) {
    console.log(n + m)
}

function resta(n, m) {
    console.log(n - m)
}

function multiplicar(numA, numB) {
    console.log(numA * numB)
}

function dividir(numA, numB) {
    console.log("Este mensaje si se va a ver")
    return numA/numB // 2
    console.log("Este mensaje no se va a mostrar")
}

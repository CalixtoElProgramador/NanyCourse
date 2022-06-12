// Repaso de Fundamentos II

/* Propiedad lenght: Nos devuelve la longitud de un arreglo. Es decir, un número */
let myArray = [0, 1, 2, 3, 4, 5, "asdasd"]
let lenghtArray = myArray.length // = 0

/* ¿Para qué nos puede servir esto? 
   - Para recorrer todos los valores de un arreglo
   - Para saber si mi arreglo está vacío o no 
   - Para obtener la última posición de mi arreglo */

   for (let i = 0; i < lenghtArray; i++) {

   }

   if (lenghtArray == 0) {
       console.log("No tienes tareas pendientes")
   }

   console.log(myArray[myArray.length - 1])

   let myString = "Nany estuvo aquí"
   console.log(myString.length)

/* Includes: Te devuelve un Booleano si el texto a buscar se encuentra dentro del String */
// - Me sirve para validar si un valor se encuentra en mi arreglo o texto
// console.log(myString.includes("Nany"))
// console.log(myArray.includes(6))

/* Replace: Primer, encuentra un texto. Si lo encuentra, entonces lo reemplaza por otro */
console.log(myString.replace("Nany", "Calixto"))

const SEARCH_ELEMENT = 3
const VALUE_TO_REPLACE = "Calixto"

// REEMPLAZAR UN VALOR POR OTRO EN UNA LISTA/ARREGLO
// IndexOf = devuelve la posción en la se encuentra un valor.
// ADVERTENCIA: Primero valida si ese valor REALMENTE se encuentra en tu arreglo
// Utiliza la función includes para validar.

if (myArray.includes(SEARCH_ELEMENT)) {
    // Gracias a que mi variable "myPosition" está definida como let,
    // hace que solo exista dentro de las llaves de mi condicional if
    // Fuera de ellas, la variable deja de existir
    // Una buena práctica para tener en orden mis variables.
    let myPosition = myArray.indexOf(SEARCH_ELEMENT)
    myArray[myPosition] = VALUE_TO_REPLACE
    console.log(myArray)
} else {
    console.log("Lo sentimos, pero su pedido no se encuentra.")
}
 
// Operadores de Atribución: Aplica para TODOS los signos matemáticos que hemos aprendido.
// +, -, /, *, **, %
let numberA = 6
let numberB = 2

//console.log(numberA += numberB)

console.log(numberA **= numberB)

// Funciones
function saludar(name, age, counter /* 5 */) {
    if (counter == 5 ) {
        let days = age * 375
        // Nanyyyyyy
        return console.log(`Hola ${name}, tienes ${age} años. Has vivido ${days} días`)
    }
    // Nanyy
    let positionLastWord = name.length - 1 // 4
    let lastWord = name[positionLastWord] // y
    name = `${name}${lastWord}` // Nanyyy
    saludar(name, age, ++counter)
}

saludar("Aarón", 17, 0)

let counter = 4 + 1
// SI PRIMERO ESTÁ LOS SIGNOS DE SUMA, QUIERE DECIR QUE PRIMERO HAGO LA SUMA Y DEVUELVO EL RESULTADO
console.log(++counter)
// SI PRIMERO ESTÁ LA VARIABLE, ENTONCES, ACCEDO AL VALOR QUE TIENE LA VARIABLE Y DESPUÉS HAGO LA SUMA
console.log(counter++)
console.log(counter)










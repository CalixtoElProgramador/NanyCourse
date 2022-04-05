// En esta primera clase haremos un repaso acerca de los temas aprendidos en estos primeros
// dos días. 

var saludoA = 'Hello world'
var saludoB = saludoA + " I'm Calixto"

var numA = 1
var numB = 10
var numC

var name1 = "Aarón"

var numC = numA * numB

var arrB = ['Cura', 'Carlos']
var arrA = ['Aarón', 'Isaac', ['Cura', 'Carlos', ['Nany', 'Souza']]]

// arrA[2] === ['Cura', 'Carlos'] === arrB

// Tarea #1
// Muestrame el siguiente texto usando ell arrA
// Nany Souza

// OPERADORES y OPERADORES LÓGICOS y OPERADORES MATEMÁTICOS

numA = 0
numB = 5
numC = 0

/** 
 * >    -> Mayor que
 * <    -> Menor que
 * ==   -> Igual que
 * >=   -> Mayor o igual que
 * <=   -> Menor o igual que
 * ===  -> Valor y el tipo de la variable
*/

if (numA > numB) {
    console.log(numA + " es mayor a " + numB)
} else if (numA == numB) {
    console.log(numA + " es igual a " + numB + '. Parabens!')
} else {
    console.log(numA + " es menor a " + numB)
}

/** 
 * Operador lógico 'y' -> &&
 * True && True = True
 * False && True = False
 * True && False = False
 * False && False = False
 * 
*/

if (numA > numB && numB > numC) {
    console.log('La prueba fue exitósa. Bien hecho')
} else {
    console.log('La prueba fracasó. Muy mal')
}

var nombre = "Nany"

var losNombreSonIguales = "Nany" == nombre // Booleano, que puede ser false o true

var arrBooleanos = [losNombreSonIguales, true, false]

if (arrBooleanos[0]) {
    console.log("El resultado es True")
} else {
    console.log("El resultado es False")
}

var isNanyHappy = true



// Clase #00: Operadores y un repaso

var asd

/* 

var arrA = ['Aarón', 'Isaac', ['Cura', 'Carlos', ['Nany', 'Souza']]]
var arrB = ['Cura', 'Carlos', ['Nany', 'Souza']]
var arrC = ['Nany', 'Souza']

// Tarea #1
// Muestrame el siguiente texto usando ell arrA
// Nany Souza

console.log(arrA[2][2][0] + ' ' + arrA[2][2][1])
console.log(arrB[2][0] + ' ' + arrB[2][1])
console.log(arrC[0] + ' ' + arrC[1])

*/

// arrA[2] == ['Cura', 'Carlos', ['Nany', 'Souza']] == arrB
// arrB[2] == ['Nany', 'Souza'] == arrC

/** 
 * Operadores Lógicos
 * && 'y' AND
 * || 'o' OR
 * !  'No' NOT
 * ^  'XOR'
*/

/**
 * Operador && 
 * true && true = True
 * false && true = False
 * true && false = False
 * false && false = False
 * 
 * print(5 > 2 && 1 == 2)
 * > false
 * 
 * 
 * 
*/

// Este código se encarga de evaluar dos pruebas con operadores lógicos
/*if (5 > 10 && 15 > 20) {
    console.log("Prueba exitosa")
} else {
    console.log("Prueba fallida")
}*/

/**
 * Operador || 
 * true || true = True
 * false || true = True
 * true || false = True
 * false || false = False
 * 
*/

/*if (4 > 10 || 5 > 20) {
    console.log("Prueba exitosa")
} else {
    console.log("Prueba fallida")
}*/

/**
 * Operador XOR 
 * true ^ true = False
 * false ^ true = True
 * true ^ false = True
 * false ^ false = False
 * 
*/

/*if (2 > 10 ^ 40 > 20) {
    console.log("Prueba exitosa")
} else {
    console.log("Prueba fallida")
}*/

/**
 * Operador NOT
 * Retorna el valor opuesto de nuestro resultado
 * EJ:
 * Si nuestro resultado fue un true, si le agragmos
 * el signo de exclamación ! nos va a devolver su valor
 * opuesto; es decir, un false 
 */

var result = 5 > 10 // false

/*console.log(
        !((((4 > 10 && 20 > 8) || true) ^ false) && true)
    )
*/

/**
 * Distinto de !=
 */

console.log( 
    10 != 5
)




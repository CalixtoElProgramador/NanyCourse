// This is my first JavaScript code!

console.log("\n\n");

var message = 'Hello';
var anotherMessage = message + ' my friend,'

/**
 * La sentencia if nos ayuda en decidir hacer algo siempre y cuando la prueba
 * nos de como resultado True. Si el resultado de la prueba es False, entonces,
 * se ignora lo que esta declarado en el bloque if {}.
 */

/*

if (numA >= numB) {
    console.log('La primera prueba evaluada es true')
    console.log(numA + ' es mayor o igual a ' + numB)
} else {
    console.log('La primera prueba falló.')
    console.log(numA + ' NO es mayor o igual a ' + numB + ', por lo tanto, es menor')
}

if ('Nany' == 'Nany') {
    console.log("Sí son iguales, tonto")
} else {
    console.log("No, las mayúsculas y las minísculas no son iguales para una computadora.")
}

*/

/** 
 * Con operador 'y' (&&)
 * True && True == True
 * False && True == False
 * True && False == False
 * False && False == False
 * 
 * Con operador 'o' (||)
 * True || True == True
 * False || True == True
 * True || False == True
 * False || False == False
 * 
 * Con operador 'xor' (^)
 * True ^ True = False
 * False ^ True = True
 * True ^ False = True
 * False ^ False = False
 * 
 * NO/Negación/Lo opuesto a -> !
 * 
 * 
*/

var numA = 15
var numB = 10
var numC = 20

var isInternetConectionActived = (!(numA > numB && numB > numC) ^ (numC > numB || numB > numA)) ^ numC > numA

if (isInternetConectionActived) {
    console.log('Tu conexión es estable')
} else {
    console.log('No tienes conexión')
}

var entities = ['World', 'Nany', 'Brasil', 'Calixto', 'Mexico', ['test0', 'test01', [true, false]]]



/* Esto es un comentario es muy utilizada para que la gente que está leyendo tu código
pueda entender lo que estás haciendo y no pierda mucho tiempo en entenderlo. 

console.log(message + ' ' + entities[0])
console.log(message + ' ' + entities[1])
console.log(message + ' ' + entities[2])
console.log(message + ' ' + entities[3])
console.log(message + ' ' + entities[4])
console.log(message + ' ' + entities[5][2][0])
console.log(message + ' ' + [true, false][0])

console.log('\n')

console.log(otherNum)

console.log(message + ' World');
console.log(message + ' Nany');
console.log(message + ' Brasil');
console.log(anotherMessage + ' Calixto');
console.log(anotherMessage + ' Mexico');

*/

console.log("\n\n");



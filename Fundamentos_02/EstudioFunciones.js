// Este archivo fue creado para estudiar las funciones en JavaScript

//¿Cómo se crea una función? 
/* Consta de la palabra clave function, seguida de:
  - El nombre de la función.
  - Una lista de parámetros de la función, entre paréntesis y separados por comas.
  - Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }. */
  
function sumar(numA, numB) {
  return numA + numB // Retorna la suma de dos numeros
}

/* La instrucción return especifica el valor devuelto por la función: */

var carro = {
  modelo: 'Toyota',
  año: 2021,
  precio: 500000.00,
  fueVendido: false
}

var nombre = 'Calixto'

console.log(carro.fueVendido)
venderCoche(carro)
console.log(carro.fueVendido)

console.log(nombre)
añadirApellido(nombre)
console.log(nombre)

function venderCoche(miCoche) {
  miCoche.fueVendido = true
  return console.log('El coche se vendió exitósamente')
}

function añadirApellido(miNombre) {
  miNombre = miNombre + ' Andrade'
}



// Expresiones Fuction

const diferencia = function(numA, numB) {
  return Math.abs(numA - numB)
}

var resultado = diferencia(5, 20)
console.log(resultado)

// console.log(factorial(3)) /* ERROR */

const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1)
}

console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1 = 120

function sumar(numA, numB) {
  return numA + numB
}

function customMap(arreglo, operacion) {
  var result = []
  var i
  for (i = 0; i != arreglo.length - 1; i++) {
    result[i] = operacion(arreglo[i], arreglo[i+1])
  }
  return result
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(numeros)
console.log(customMap(numeros, sumar))
console.log(customMap(numeros, diferencia))
console.log(customMap(numeros, producto))

function producto(numA, numB) {
  return numA * numB
}

// Recursión 

function foo(i) {
  if (i < 0)
    return;
  console.log('inicio: ' + i);
  foo(i - 1);
  console.log('fin: ' + i);
}
foo(3);

// Produce:

// inicio: 3
// inicio: 2
// inicio: 1
// inicio: 0
// fin: 0
// fin: 1
// fin: 2
// fin: 3




// Ciclos. Los ciclos nos ayudan mucho para realizar una tarea
// en una cantidad de veces específica.

// For.. of sentence
// for, (), {}, of

// for clásico
// for (laVariableQueCambiaDeValor, Prueba, Que tanto quieres que aumente)

var listaDeCompras = ['Huevos', 'Jamón', 'Queso', 'Azucar', 'Leche', 'Cereal', 'Ropa', 'Papel', 'Café']
/*
console.log("Tienes que comprar: " + listaDeCompras[0])
console.log("Tienes que comprar: " + listaDeCompras[1])
console.log("Tienes que comprar: " + listaDeCompras[2])
console.log("Tienes que comprar: " + listaDeCompras[3])
console.log("Tienes que comprar: " + listaDeCompras[4])
console.log("Tienes que comprar: " + listaDeCompras[5])
console.log("Tienes que comprar: " + listaDeCompras[6])
console.log("Tienes que comprar: " + listaDeCompras[7])
*/

// For clásico
/* for (var n = 0; n < 10; n = n + 1) {
    console.log("El numero de n es igual a: " + n)
    if (n == 5 || n == 8 ) {
        console.log("El mensaje especial es: Hola Nany y el valor de n: " + n)
    }
}*/
/*
// Este algoritmo imprime la lista en orde
for (var n = 0; n < listaDeCompras.length; n = n + 1) {
    console.log("Tienes que comprar: " + listaDeCompras[n])
    if (listaDeCompras[n] == 'Café') {
        console.log("Compra más que le gusta a Nany")
    }
}*/

/*
// Este otro algoritmo imprime la lista al revés.
            //  n <          8, 7, 6, 5, 4, 3, 2, 1, 0 
for (var n = listaDeCompras.length - 1; n >= 0; n = n - 1) {
    console.log("Tienes que comprar: " + listaDeCompras[n])
    if (listaDeCompras[n] == 'Café') {
        console.log("Compra más que le gusta a Nany")
    }
}*/

// for... of sentence
// for, (), {}
// (var comida of listaDeCompras)

/*
for (var comida of listaDeCompras) {
    console.log("Tienes que comprar: " + comida)
    if (comida == 'Café') {
        console.log("No lo hagas porque Nany lo toma mucho")
    }
}*/
/*
var img = 'ewwewwewwewwe'

for (var letra of img) {
    validaLaLetraSegúnSuValor(letra)
    console.log("Regresó")
}

function validaLaLetraSegúnSuValor(letra) {
    if (letra == 'e') {
        console.log("Hola Nany c:")
    } else if (letra == 'w') {
        console.log("Tchau Nany")
    }
}*/

/*
saludar('Calixto')
saludar('Nany')
saludar('Souza')
saludar('Aaron')
*/

// Programación Funcional
muestraCadaLetraDelNombre('Aarón')
muestraCadaLetraDelNombre('Souza')
muestraCadaLetraDelNombre('Nany')
muestraCadaLetraDelNombre('Calixto')

// var, if, for, fuction

function saludar(nombre) {
    console.log("Hoollaaa " + nombre)
    if (nombre == "Nany") {
        console.log("Olá, eu sou brasileiro")
    }
}

function muestraCadaLetraDelNombre(nombre) {
    for (var letra of nombre) {
        console.log(letra)
    }
}


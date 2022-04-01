// Ciclos anidados y objetos

var nombres = [["Aarón", "Calixto"] /* lenght = 2 */, ["Nany", "Souza"], ["Jorge", "Luis"]] // nombres.lenght = 3

/*
console.log(`${nombres[0][0]}`)
console.log(`${nombres[0][1]}`)
console.log(`${nombres[1][0]}`)
console.log(`${nombres[1][1]}`)
console.log(`${nombres[2][0]}`)
console.log(`${nombres[2][1]}`)

console.log(["Aarón", "Calixto"].length)
console.log(["Aarón", "Calixto", "asdas", "asdasd"][1])
*/
// for .... of
// for clásico
/*
            //  2 < 3
for (var n = 0; n < nombres.length; n++) { // n = 2
                //  1 < 2
    for (var m = 0; m < nombres[n].length; m++) { // n = 2, m = 0
        console.log(nombres[n][m]) // Aarón, Calixto, Nany, Souza, Jorge
    }
    console.log("Ha terminado el ciclo de m")
    if (n % 2 == 0 && n != 0) {
        console.log(`El valor de ${n} es par`)
    }
}

console.log("Ha terminado el ciclo de n")
*/

// OBJETOS
// var, nombres, { nombre de propiedades: valor }

var coche01 = {
    marca: "Chevrolet",
    año: 2012,
    modelo: "Fiesta",
    costo: 20000,
    fueVendido: false,
    clientes: ["Aarón Calixto", "Nany Souza"],
    color: "Azul" 
}

var llantasBochito = {
    id: "ajsdkajsdkasjdkasjdkas",
    modelo: "Bochito",
    tamaño: "2 metros",
    resistencia: "Dura",
    material: "Caucho"
}

var llantasMichelin = {
    id: "ajsdkajsdkasjdkasjdkas",
    modelo: "Michelin",
    tamaño: "3 metros",
    resistencia: "Dura",
    material: "Caucho"
}

var asientoMercedes = {
    id: "123",
    modelo: "Mercedez",
    color: "Negro",
    costo: 201
}

var coche02 = {
    marca: "Mercedes Benz",
    año: 2,
    modelo: "ElMasCaro",
    costo: 500000,
    fueVendido: true,
    clientes: ["Nany Souza"],
    color: "Blanco",
    llantas: llantasBochito,
    asientos: asientoMercedes
}

var coches = [coche01, coche02]
muestrameTodosLosCoches()

if (coche02.fueVendido) {
    console.log("El coche ya se vendió")
    console.log(`Te interesa este coche: ${coche01.marca}`)
} else {
    console.log("Disponible a la venta")
    console.log(`Estas son los clientes que lo quieren: ${coche01.clientes}`)
}

function muestrameTodosLosCoches() {
    console.log(coches)
}

for (var n = 0; n < coche01.clientes.length; n++) {
    console.log(coche01.clientes[n])
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
rl.question(`Inserte su lista de nùmeros separados por una coma: `, (numberList) => {
    // "Hola        soy Calixto".trim() => "HolasoyCalixto"
    // "8.5, 10, 4,      5".trim() => "8.5,10,4,5".split(",") => ["8.5", "10", "4", "5"]
    const numbers = numberList.trim().split(",")
    console.log(numbers)
    var sum = 0
    for (const valueString of numbers) { sum += Number(valueString) }
    const mean = sum/numbers.length
    console.log(`El promedio es: ${mean}`)
    rl.close()
}); 

*/

// Escribí un programa que solicite al usuario un número y le reste el 15%, almacenando todo en una única variable. 
// A continuación, mostrar el resultado final en pantalla.

/**
 * Ingresá un número: 260
 * Descontando el 15% queda: 221.0 
 **/

/* rl.question("Put your price: ", (priceString) => {
    rl.question("Put your discount: ", (discountString) => {
        var price = Number(priceString);
        var discount = Number(discountString)/100 
        priceWithDiscount = price - (price * discount)
        console.log(`El precio con descuento es de: ${priceWithDiscount}`)
        rl.close()
    });
}); 
*/

/** 
 * Escribí un programa que solicite al usuario el ingreso de dos palabras, las cuales se guardarán en dos 
 * variables distintas. A continuación, almacená en una variable la concatenación de la primera palabra, 
 * más un espacio, más la segunda palabra. Mostrá este resultado en pantalla.
 **/

/*rl.question("Insertá tu primera palabra: ", (wordA) => {
    rl.question("Insertá tu segunda palabra: ", (wordB) => {
        console.log(wordA + " " + wordB)
        console.log(`${wordA} ${wordB}`)
        rl.close()
    });
});*/

/* rl.question("Insertá tus palabras separadas por un corazón: ", (words) => {
    const SEPARETOR = "<3"
    var wordList = words.trim().split(SEPARETOR)
    var wordsConcat = ""
    for (const word of wordList) {
        wordsConcat = `${wordsConcat} ${word}`
    }
    console.log(wordsConcat)
    rl.close()
}); */

/*
rl.question("Insertá tus palabras separadas por un corazón: ", (words) => {
    console.log(words.replace(/<3/g," "))
});
*/

/** 
 * Escribí un programa que solicite al usuario el ingreso de un texto y almacene ese texto en una variable. 
 * A continuación, mostrar en pantalla la primera letra del texto ingresado. Luego, solicitar al usuario que ingrese 
 * un número positivo menor a la cantidad de caracteres que tiene el texto que ingresó (por ejemplo, si escribió la 
 * palabra “HOLA”, tendrá que ser un número entre 0 y 4) y almacenar este número en una variable llamada indice. 
 * Mostrar en pantalla el carácter del texto ubicado en la posición dada por indice. 
**/

"A sd qesads" 
/*
rl.question("Ingresa la frase: ", (phrase) => {
    console.log(phrase[0])
    rl.question("Ingresa tu número mágico: ", (stringIndex) => {
        var index = Number(stringIndex)
        if (index < phrase.length && index >= 0) {
            console.log(phrase[index])
            rl.close()
        } else {
            console.log("Eres un tonto")
            rl.close()
        }
    });
});
*/

/** 
 * Escribí un programa que solicite al usuario que ingrese cuántos shows musicales ha visto en el último año y 
 * almacene ese número en una variable. A continuación mostrar en pantalla un valor de verdad (True o False) que 
 * indique si el usuario ha visto más de 3 shows.
**/

rl.question("¿Cuántos shows has visto?: ", )



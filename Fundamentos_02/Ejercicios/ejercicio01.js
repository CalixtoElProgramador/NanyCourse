
// Escribir un programa que almacene las asignaturas de un curso 
// (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en una lista, 
// pregunte al usuario la nota que ha sacado en cada asignatura, y después 
// las muestre por pantalla con el mensaje En <asignatura> has sacado <nota> 
// donde <asignatura> es cada una des las asignaturas de la lista y <nota> cada una 
// de las correspondientes notas introducidas por el usuario.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let anwser
let wantToAddMore
let subjects = []
let notes = []

/* rl.question(`¿Cuánto sacaste en ${subjects[0]}?: `, nota00 => {
    notes[0] = nota00
    rl.question(`¿Cuánto sacaste en ${subjects[1]}`, nota01 => {
        notes[1] = nota01
        rl.question(`¿Cuánto sacaste en ${subjects[2]}`, nota02 => {
            notes[2] = nota02
            rl.question(`¿Cuánto sacaste en ${subjects[3]}`, nota03 => {
                notes[3] = nota03
                rl.question(`¿Cuánto sacaste en ${subjects[4]}`, nota04 => {
                    notes[4] = nota04
                    for(var i = 0; i < subjects.length; i++) {
                        console.log(`En la materia ${subjects[i]} sacaste ${notes[i]}`)
                    }
                    rl.close()
                })
            })
        })
    })    
})*/

let q

do {
    rl.question("¿Continuar el ciclo? (s/n) ", respuesta => {
        q == respuesta
        rl.prompt()
    })
} while (q == "s")
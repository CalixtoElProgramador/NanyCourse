const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var personasConServicioMilitar = ['Ione', 'Calixto', 'Juan', 'Pedro', 'Ronaldinho', 'Vinicius']

console.log("============================================")
console.log("|                                          |")
console.log("|      BIENVENIDO A ESTÉTICAS NANY         |")
console.log("|                                          |")
console.log("============================================")

rl.question(`¿Cuál es tu edad? `, (edad) => {
  if (esMayorDeEdad(edad)) {
    rl.question('¿Ya hiciste tu servicio militar? (s/n) ', (anwser) => {
      if (esAfirmativo(anwser)) {
        rl.question('¿Cuál es tu nombre? ', (nombre) => {
          questionWhatItYourNameFlow(nombre, edad)
        })
      } else if (anwser == 'n' || anwser == 'N') {
        console.log('Tienes que hacerlo')
        rl.question('¿Cuál es tu país? ', (pais) => {
          for (var letra of pais) {
            console.log(letra)
          }
          console.log(`Exacto, es ${pais}, y tienes que servirlo. ¿Te quedó claro o lo tengo que volver a deletrear?`)
          console.log("Fin del programa.")
          rl.close(); // Acaba el programa
        })
      } else {
        console.log('Primero lee bien, y luego escribe, bobi')
        rl.close(); // Acaba el programa
      }
    })
  } else {
    console.log("Eres menor de edad.")
    rl.question("¿Te gustaría alistarte al ejercicio, hijo? (s/n)", (respuesta) => {
      if (esAfirmativo(respuesta)) {
        rl.question('¿Cuál es tu nombre? ', (primerNombre) => {
          rl.question('¿Cuál es tu apellido paterno? ', (apellidoPaterno) => {
            rl.question('¿Cual es tu apellido materno?', (apellidoMaterno) => {
              var persona = {
                name: primerNombre,
                lastname: `${apellidoPaterno} ${apellidoMaterno}`,
                age: edad
              }
              console.log(persona)
              rl.question('¿Tus datos son correctos? (s/n)', (respuestaDos) => {
                if (respuestaDos == 's' || respuestaDos == 'S') {
                  console.log("Estás alistado al ejercito, hijo. Llenas de orgullo a tu nación")
                  rl.close() // Acaba el programa
                } else {
                  console.log('Es tu culpa, tu los escribiste mal. Adiós')
                  rl.close() // Acaba el programa
                }
              })
            })
          })
        })
      } else {
        console.log("A pues ya veremos a quien llames cuando necesites ayuda. Adiós")
        rl.close(); // Acaba el programa
      }
    })
  }
});

function esMayorDeEdad(edad) {
  return edad >= 18 // booleano
}

function esAfirmativo(anwser) {
  return anwser == "S" || anwser == "s"
}

function isNameIncludesOnTheDatabase(name, database) {
  return database.includes(name)
}

function felicitarPorSuServicio(nombre) {
  console.log(`Efectivamente ${nombre}, estás dentro del servicio.`)
}

function questionWhatItYourNameFlow(nombre, edad) {
  if (isNameIncludesOnTheDatabase(nombre, personasConServicioMilitar)) {
    felicitarPorSuServicio(nombre)
    rl.close(); //Acaba el programa
  } else {
    console.log("Nos acabas de engañar mentiroso. Vamos a por ti.")
    rl.question('¿Dónde vives, mentiroso? ', (lugar) => {
      console.log(`Ok ${nombre} con ${edad} años, vamos a ${lugar} para llevarte a la carcel.`)
      rl.close(); // Acaba el programa
    })
  }
}
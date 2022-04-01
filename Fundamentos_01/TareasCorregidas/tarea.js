/*
Tarea #03
Instrucciones:
1. Crea un array de strings con un length mayor a cinco

Dentro de un for classic hacer lo siguiente: 
2. La prueba de tu ciclo for debe de considerar el length de tu array.
3. Muestra en pantalla cada uno de los valor del array concatenado junto con un string de tu preferencia.
4. Mostrar un mensaje especial para las posiciones pares (investiga cómo funciona el operador módulo/resto '%' en JavaScript para resolver este punto)
5. Mostrar un mensaje especial en la última posición (puntos extra si utilizas la propiedad length de tu array para realizar esta prueba)
6. Utilizar de la manera en cómo tu quieras un if junto con algún operador lógico (AND, OR, NOT, XOR) de tu preferencia

Ahora con un for... of realiza lo siguiente:
7. Imprime cada uno de los valores de tu array
8. Imprime un mensaje especial cuando el valor contenga el string 'e' (Investiga cómo utilizar la función/método includes() en JavaScript)

Tiempo para hacer: Una semana
Entregado: 6 días después
 */

/* Las variables inician con minúscula. Punto menos*/
/*
var beleza = ['primer','serum','corrector','iluminador','contorno','barra','polvo']

for(var T=0;T<beleza.length;T=T+1) {
    console.log('llevar en tu bolsa ' + beleza[T])
    if(T%2==0) {
        console.log("mensaje especial n° par") 
        if(beleza[T]=="polvo") {
            console.log('final especial')
            if(4<3 ^ 6==6){ 
                console.log("Bom dia")
            }
        }
    }
}


for(var element of beleza){console.log(element);
if(element.includes("e")){console.log("Hola Calixto")}}
*/

// CORRECCIONES
/* Las variables inician con minúscula. Punto menos*/

const INCREMENTO_EN_UNO = 1

var beleza = ['primer','serum','corrector','iluminador','contorno','barra','hola', 'Polvo', 'Nany']
var T = 0
var ultimaPosicion = beleza.length - 1
    // 9         9
for (T; T <= ultimaPosicion; T = T + INCREMENTO_EN_UNO) {
    console.log(`Debes de llevar en tu bolsa ${beleza[T]}`)
    var isNumberPar = T%2==0 && T != 0
    // CERO NO ES UN PAR NI IMPAR
    if(isNumberPar) {
        console.log("mensaje especial n° par")
    }
    var isLastPosition = T == ultimaPosicion
    if(isLastPosition) {
        console.log('final especial')
        if(4<3 ^ 6==6) { 
            console.log("Bom dia")
        }
    }
}

const PALABRAS_OFENSIVAS = "e"

for (var element of beleza) {
    console.log(element);
    var isElementIncludesTheString = element.includes(PALABRAS_OFENSIVAS)
    if(isElementIncludesTheString) {
        console.log("Hola Calixto")
    }
}

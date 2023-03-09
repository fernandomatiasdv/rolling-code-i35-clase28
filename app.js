const variable = "Hola MUNDO"
console.log(variable)
console.log(variable.toUpperCase()) // Mayuscula
console.log(variable.toLowerCase()) // Minúscula
console.log(variable.charAt(0)) // Toma la posición de la variable string
console.log(variable.charAt(5))
console.log(variable.charAt(variable.length-1)) // Toma la última posición de la variable string
console.log(variable.endsWith("MUNDO")) // Finaliza con la palabra, debe coincidir mayúscula con minúscula
console.log(variable.toLowerCase().endsWith("do"))
console.log(variable.endsWith("do".toUpperCase()))
//console.log(variable.endsWith("MUNDO").toUpperCase()) // true/false no tienen el método toUpperCase
const numero = "8"
console.log(typeof numero)

const numeroParseado = parseInt(numero)
console.log(typeof numeroParseado)

const texto =  "Este, es, un, nuevo, texto"
const palabras = texto.split(", ")         // Corta por medio de un/unos caracter/es
console.log(palabras)

console.log(palabras.join(', ')) // Une en un string las partes de un vector separados por un caracter

const vector = [1, " hola"]
console.log(vector.join(" "))

let vari = "rolling code asdasdasdsadsadsad"
console.log(vari.replace("code", "stones"))


vari = "                               rolling code asdasdasdsadsadsad                                   "
console.log(vari.trim()) // Quita los espacios de adelante y atras

/************************************************************/

let numeros1 = [1, 2, 3]
let numeros2 = [4, 5, 6]
let numeros3 = [7, 8, 9]

const todosLosNumeros = numeros1.concat(numeros3, numeros2)
console.log(todosLosNumeros)


const num = [1, 3, 8, 5, 6]
const pares = num.find((numero) => {
    return numero % 2 === 0  // => Es verdad te devuelve el valor de la primera posición que encontró
})
console.log(pares)

const valor = num.findIndex(numero => {
    return numero % 2 === 0   // => Es verdad te devuelve la primera posición que encontró
})
console.log(valor)

const verduras = ["lechuga" , "tomate", "remolacha"]

const posicion = verduras.indexOf("lechuga") // Encuentra es el índice a partir de un string dentro de un vector
console.log(posicion)

const existeVerdura = verduras.includes("pepino") // Devuelve true o false dentro del vector.
console.log(existeVerdura)

verduras.forEach( (verdura, indice) => { // Funciona como procedimiento, puede contener lógica interna y su
    console.log(indice + ": " + verdura) // función es recorrer el array.
})

const verduraArray = verduras.map((verdura,indice)=>{ // Funciona como función, pushea sobre un array nuevo
    return(indice + ": " + verdura)                  //  lo que devuelve el return. Puede contener lógica
})

console.log(verduraArray)


const datosPersonales = {
    id: 1,
    nombre: "Pochi"
}

const keys = Object.keys(datosPersonales) // Toma las keys del objeto
console.log(keys)

const values = Object.values(datosPersonales)// Toma las valores del objeto
console.log(values)

const parClaveValor = Object.entries(datosPersonales) // Genera en un vector el par clave - valor
console.log(parClaveValor)


'use strict'

/* Conversión número romano a decimal */


/* Validación números romanos validos */

const validacion = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/


/* Creación funcion para convertir numero Romano a Decimal */

function convertRomanToDecimal(numberRoman) {

    if (!validacion.test(numberRoman.toUpperCase())) {
        const mensajeError = console.log(`${numberRoman} No es un número Romano válido.`)
        return mensajeError
    }

    let arrayRomanumber = []

    for (let i = 0; i < numberRoman.length; i++) {
        arrayRomanumber .push(numberRoman[i].toUpperCase())
    }

    let arrayValor = arrayRomanumber.map((letra, index, arr) => {
        switch (letra) {
            case 'M':
                return 1000
                break
            case 'D':
                return  500
                break
            case 'C':
                return  100
                break
            case 'L':
                return  50
                break
            case 'X':
                return  10
                break
            case 'V':
                return  5
                break
            case 'I':
                return  1
        }
    })

    let result = arrayValor.reduce((resultado, actual, index, arr) => {
        if (index === 0) {
            resultado = actual;
        } else if( actual <= arr[index-1]){
            resultado +=  actual
        }else{
            resultado += - arr[index-1] * 2 + actual;
        }

        return resultado
    })
    return `El número romano: ${numberRoman} en número decimal es: ${result}`
}

/* Conversión número decimal a romano */


/* Valores validos para su conversión */

const millares = ['M', 'MM', 'MMM']
const centenas = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
const decenas =  ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
const unidades = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

/* Inicio funcion conversión Arabico a Romano */

function convertArabicoToRomano(numberArabico) {

    let lecturaNumber = numberArabico

    let resultado = ''

    if (numberArabico < 1 || numberArabico >=3999 ){
        console.log(`El número ${numberArabico} esta fuera de rango`)
        return
    }else {
        let millar = Math.floor(numberArabico / 1000)
        if(millar != 0){
            numberArabico = numberArabico % 1000
            resultado += millares[millar-1]
        }else {
            resultado += ''
        }

        let centena = Math.floor(numberArabico / 100)
        if(centena != 0){
            numberArabico = numberArabico%100
            resultado += centenas[centena-1]
        }else {
            resultado += ''

        }

        let decena = Math.floor(numberArabico / 10)
        if(decena != 0){
            numberArabico = numberArabico%10
            resultado += decenas[decena-1]

        }else {
            resultado += ''

        }

        let unidad = Math.floor(numberArabico / 1)
        if (unidad != 0){
            numberArabico = numberArabico % 1
            resultado += unidades[unidad-1]

        }else {
            resultado += ''

        }
    }

    return `El número Arábico: ${lecturaNumber} en número Romano es: ${resultado}`

}

/* Exportar los modulos para poder usarlos en otro archivo */

module.exports = {
    convertArabicoToRomano,
    convertRomanToDecimal
}
'use strict'

const test = require ('./read-write.js')

console.log('Iniciando aplicación')

test.leerAsincrono()
test.leerSincrono()

/*const fs = require('fs');

const leerAsincrono = function () {
    return new Promise(resolve => {
        setTimeout(() => {
            fs.readFile('datos.json', 'utf8', (err, data) => {
                if (err){
                    console.log('Error al leer el archivo')
                }else {
                    let dec = JSON.parse(data).decimal
                    let rom = JSON.parse(data).romano
                    console.log('Lectura de Datos Asincrona')

                    fs.writeFile('writeMe.txt',`${convertArabicoToRomano(dec)}  y ${convertRomanToDecimal(rom)}`, (err, data) => {
                        if (err) {
                            console.log('Error al escribir el archivo')
                        } else {
                            console.log('Archivo creado de manera Asincrona')
                        }
                    })
                }
            })

        }, 1000);
    });
}

const leerSincrono = function () {
    return new Promise(resolve => {
        setTimeout(() => {
            let leerSync = fs.readFileSync('datos.json')
            let convertirDec = JSON.parse(leerSync).decimal2
            let convertirRom = JSON.parse(leerSync).romano2
            console.log('Lectura de Datos Sincrona')

            fs.writeFileSync('writeMeSync.txt', `${convertArabicoToRomano(convertirDec)}  y ${convertRomanToDecimal(convertirRom)}`)
            console.log('Se ha creado el archivo de manera Sincrona')
        }, 1000);
    });
}*/


/* Conversión número romano a decimal */

/*const validacion = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/


function convertRomanToDecimal(numberRoman) {

    if (!validacion.test(numberRoman.toUpperCase())) {
        let mensajeError = console.log(`${numberRoman} No es un número Romano válido.`)
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
    return `El número ${numberRoman} es en decimal ${result}`
}*/


/* Conversión número decimal a romano */

/*const millares = ['M', 'MM', 'MMM']
const centenas = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
const decenas =  ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
const unidades = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

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

    return `El número ${lecturaNumber} en Romano es: ${resultado}`

}*/






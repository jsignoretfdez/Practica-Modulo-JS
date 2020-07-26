'use strict'

const fs = require('fs');
let convert = require ('./converter.js')

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

                    fs.writeFile('writeMe.txt',`${convert.convertArabicoToRomano(dec)} y ${convert.convertRomanToDecimal(rom)} `, (err, data) => {
                        if (err) {
                            console.log('Error al escribir el archivo')
                        } else {
                            console.log('Archivo creado de manera Asincrona')
                        }
                    })
                }
            })

        }, 3000);
    });
}

const leerSincrono = function () {
    return new Promise(resolve => {
        setTimeout(() => {
            let leerSync = fs.readFileSync('datos.json')
            let convertirDec = JSON.parse(leerSync).decimal2
            let convertirRom = JSON.parse(leerSync).romano2
            console.log('Lectura de Datos Sincrona')

            fs.writeFileSync('writeMeSync.txt', `${convert.convertArabicoToRomano(convertirDec)}  y ${convert.convertRomanToDecimal(convertirRom)}`)
            console.log('Se ha creado el archivo de manera Sincrona')
        }, 2000);
    });
}

module.exports = {
    leerSincrono,
    leerAsincrono
}

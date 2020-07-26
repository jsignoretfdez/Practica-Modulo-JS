'use strict'

/*
 Importo el modulo de node fs para utilizar los metodos y propiedade del modulo FileSystem
 Importo el archivo converter para poder usar las funciones que contiene el archivo converter
 */

const fs = require('fs');
const convert = require ('./converter.js')


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

                    const templateAsync = `Archivo creado de manera Asincrona                  
-----------------------------------------------
${convert.convertArabicoToRomano(dec)}
${convert.convertRomanToDecimal(rom)}`

                    fs.writeFile('writeMe.txt',`${convert.convertArabicoToRomano(dec)} y ${convert.convertRomanToDecimal(rom)} `, (err, data) => {
                        if (err) {
                            console.log('Error al escribir el archivo')
                        } else {
                            console.log(templateAsync)
                        }
                    })
                }
            })

        }, 2000);
    });
}


const leerSincrono = function () {
    return new Promise(resolve => {
        setTimeout(() => {

            let leerSync = fs.readFileSync('datos.json')
            let convertirDec = JSON.parse(leerSync).decimal2
            let convertirRom = JSON.parse(leerSync).romano2
            console.log('Lectura de Datos Sincrona')

            const templateSync = `Archivo creado de manera Sincrona                 
-----------------------------------------------
${convert.convertArabicoToRomano(convertirDec)}
${convert.convertRomanToDecimal(convertirRom)}
`

            fs.writeFileSync('writeMeSync.txt', `${convert.convertArabicoToRomano(convertirDec)}  y  ${convert.convertRomanToDecimal(convertirRom)}`)
            console.log(templateSync)
        }, 2000);
    });
}

/* Exportar los modulos para poder usarlos en otro archivo */

module.exports = {
    leerSincrono,
    leerAsincrono
}

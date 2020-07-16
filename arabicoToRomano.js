'use strict'

function arabicoRomano(numberArabico) {

    if (numberArabico < 1 || numberArabico > 3999) {
        return `El número ${numberArabico} esta fuera de rango. introduzca otro número`
    } else {

        const datos = {
            1: "I",
            5: "V",
            10: "X",
            50: "L",
            100: "C",
            500: "D",
            1000: "M"
        }

        let resto = 0
        let resultado = ""

        let divisores = [1000, 100, 10, 1]
        divisores.map(function (item, index, array) {
            resto = Math.floor(numberArabico / item)
            numberArabico -= resto * item
            if( resto > 0 && resto <=3){
                resultado += datos[item].repeat(resto)
            }else if (resto === 4 && item !==1000){
                resultado += datos[item] + datos[item*5]
            }else if(resto === 5 && item !== 1000){
                resultado += datos[item * 5]
            }else if (resto === 6 || resto <=8 && item !==1000){
                resultado += datos[item * 5] + datos[item].repeat(resto - 5)
            }else if (resto === 9 && item !== 1000){
                resultado += datos[item] + datos[item * 10]
            }

        })

        console.log(resultado)




    }
}


function prueba (){

}
console.log(arabicoRomano(3465))


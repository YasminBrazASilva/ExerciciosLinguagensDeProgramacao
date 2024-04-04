/*10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida,
mapeie esses números para o quadrado de seus valores*/

var listaNumeros = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90]
console.log(`A lista de números é: [${listaNumeros}]`);


var listaNumerosDivisiveisPor3 = listaNumeros.filter((numero) => {
    return numero % 3 == 0
})
console.log(`Os números divisíveis por 3 são: [${listaNumerosDivisiveisPor3}]`);


var listaQadradoListaNumerosDivisiveisPor3 = listaNumerosDivisiveisPor3.map((numero) => {
    return numero ** 2
})
console.log(`Os quadrados dos números divisíveis por 3 são: [${listaQadradoListaNumerosDivisiveisPor3}]`);
/*4. Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses
números para o dobro de seus valores.*/

var listaNumeros = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90]
console.log(`A lista de números é: [${listaNumeros}]`);

var listaNumerosPares = listaNumeros.filter((numero) => {
    return numero % 2 == 0
})

console.log(`Os números pares dessa lista são: [${listaNumerosPares}]`);

var listaDobroDosNumerosPares = listaNumerosPares.map((numero) => {
    return numero * 2
})

console.log(`Os números pares dobrados são: [${listaDobroDosNumerosPares}]`);
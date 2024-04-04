/*8. Escreva uma função que recebe uma string como argumento e retorna o número de
vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u)*/

function conteVogais(string) {
    var contador = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u']
    
    for (let i = 0; i < string.length; i++) {
        if(vogais.includes(string[i])) {
            contador++
        }
    }
    
    return contador;    
}

var listaStrings = ["Elaine", "Bhrayann", "iasmin de Abreu"];
listaStrings.forEach(string => {
    var qtdeVogais = conteVogais(string);

    console.log(`A palavra '${string}' contém ${qtdeVogais} vogais minúsculas.`);
});
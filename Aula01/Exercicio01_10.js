/*10. Escreva uma função que verifique se uma determinada string é um palíndromo (ou
seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
para a esquerda)*/

function inverte(string) {
    stringInvertida = ""

    for (let i = string.length; i >= 0; i--) {
        stringInvertida += string.charAt(i)
    }

    return stringInvertida;
}

function ePalindromo(string) {
    string = string.toLowerCase()
    var stringInvertida = inverte(string)

    return string == stringInvertida;
}

var listaStrings = ["araras", "Mirim", "Yasmin"]
listaStrings.forEach(string => {
    var validade = ePalindromo(string) ? "é" : "não é"
    console.log(`A palavra '${string}' ${validade} um palíndromo`);
});

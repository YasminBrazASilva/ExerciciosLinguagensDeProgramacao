/* 7. Escreva uma função que receba uma string como argumento e retorne a string
invertida*/

function inverte(string) {
    stringInvertida = ""

    for (let i = string.length; i >= 0; i--) {
        stringInvertida += string.charAt(i)
    }

    return stringInvertida;
}

var string = inverte("Yasmin");
console.log(string);
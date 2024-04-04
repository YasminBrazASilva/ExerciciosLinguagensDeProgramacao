/* 5.Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação:
após o número 10 não pode ter um traço. */

function imprimeNumerosDeUmADez() {
    var texto = "";

    for (let i = 1; i <= 10; i++) {
        texto += i;

        if (i < 10) {
            texto += ' - '
        }
    }

    console.log(texto);
}

imprimeNumerosDeUmADez()
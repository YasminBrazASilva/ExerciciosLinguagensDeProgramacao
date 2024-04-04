/* 6. Faça uma função que mostre o dobro do número passado. Caso o número seja menor
ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que
zero” */

function imprimeDobro(numero) {
    if (numero > 0) {
        console.log(`O dobro de ${numero} é: ${numero * 2}`);
    } else {
        console.log("Só é aceito números positivos maiores que zero.");
    }   
    
    return 
}
    
imprimeDobro(2)
imprimeDobro(2894916)
imprimeDobro(0)
imprimeDobro(-94989664)
/* 1. Escreva um programa que declare duas variáveis numéricas e realize as quatro 
operações matemáticas básicas (+, -, *, /). Imprima os resultados no console. */

function imprimeOperacoesBasicas(a, b) {
    console.log(`Os números são: ${a} e ${b}`);
    
    console.log(`A soma desses números é: ${a + b}`);
    console.log(`A subtração desses números é: ${a - b}`);
    console.log(`A multiplicação desses números é: ${a * b}`);
    console.log(`A divisão desses números é: ${a / b}`);
}

imprimeOperacoesBasicas(4, 2);
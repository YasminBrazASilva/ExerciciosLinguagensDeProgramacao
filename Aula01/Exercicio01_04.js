/* 4. Faça um programa que recebe o nome de uma variável e mostre o
<<primeiro>>.<<último nome>>@facens.br */

function criarEmail(nome) {
    listaNomes = nome.split(" ")
    qtdeNomes = listaNomes.length

    var primeiroNome = listaNomes[0]
    var ultimoNome = listaNomes[qtdeNomes - 1]

    var email = `${primeiroNome.toLowerCase()}.${ultimoNome.toLowerCase()}@facens.br`;
    return email
}

var nome = "Yasmin Braz de Abreu Silva"
var email = criarEmail(nome)

console.log(`O e-mail do aluno ${nome} é: ${email}`);
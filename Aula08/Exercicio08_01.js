/*Yasmin Braz de Abreu Silva RA: 236632*/

let divPrincipal = document.getElementById('divPrincipal')
let botao = document.getElementById('botaoMudaCor');


botao.addEventListener('click', function(event) {
    event.preventDefault();

    let cores = ['red', 'green', 'blue', 'yellow', 'pink'];
    let posicao = Math.floor(Math.random() * cores.length);
    let corEscolhida = cores[posicao];
    divPrincipal.style.backgroundColor = corEscolhida;
})

/*Yasmin Braz de Abreu Silva RA: 236632*/

let botaoParaClicar = document.getElementById('botaoParaClicar');

function atualizarTextoQtdeCliques(qtdeCliques) {
    let textoQtdeCliques = document.getElementById('textoQtdeCliques');
    textoQtdeCliques.textContent = `Esse botão foi clicado ${qtdeCliques}x`;
}


let qtdeCliques = 0;
atualizarTextoQtdeCliques(qtdeCliques);


botaoParaClicar.addEventListener('click', function(event) {
    event.preventDefault();

    qtdeCliques++;
    atualizarTextoQtdeCliques(qtdeCliques);
});
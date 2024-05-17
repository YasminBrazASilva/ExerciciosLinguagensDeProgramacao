/*Yasmin Braz de Abreu Silva RA: 236632*/

let listaTarefas = document.getElementById('listaTarefas');
let botaoAdicionaTarefa = document.getElementById('botaoAdicionaTarefa');

botaoAdicionaTarefa.addEventListener('click', function (event) {
    event.preventDefault();

    let campoTexto = document.getElementById('campoTexto');
    let tarefa = campoTexto.value;
    campoTexto.value = '';

    let novoItem = document.createElement('li');
    novoItem.innerText = tarefa;
    listaTarefas.appendChild(novoItem);
})
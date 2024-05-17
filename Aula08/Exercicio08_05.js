/*Yasmin Braz de Abreu Silva RA: 236632*/

pagina = document.getElementById('pagina');
botaoContar = document.getElementById('botaoContar');

let resultado = document.createElement('p');

botaoContar.addEventListener('click', function(event){
    event.preventDefault();
    texto = document.getElementById('texto').value

    qtdePalavras = texto.split(' ').length;
    
    resultado.innerText = `Você digitou ${qtdePalavras} palavras.`
    pagina.appendChild(resultado);
});
/*Yasmin Braz de Abreu Silva RA: 236632*/

let pagina = document.getElementById('pagina')
let botoes = ['botaoSomar', 'botaoSubtrair', 'botaoMultiplicar', 'botaoDividir'];


let resultadoTexto = document.createElement('p');


function calcularEExibir(botao) {

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado;

        switch (botao) {
            case 'botaoSomar':
                resultado = numero1 + numero2;
                break;

            case 'botaoSubtrair':
                resultado = numero1 - numero2;
                break;

            case 'botaoMultiplicar':
                resultado = numero1 * numero2;
                break;

            case 'botaoDividir':
                if (numero2 === 0) {
                    alert('Impossível dividir por 0.');
                } else {
                    resultado = numero1 / numero2;
                }
                break;
        }
        
        if (!isNaN(resultado)) {
            resultadoTexto.innerText = `RESULTADO: ${resultado}`;
            pagina.appendChild(resultadoTexto);
        } else {
            resultadoTexto.remove();
        }

    } else {
        alert('É necessário digitar os dois números para realizar a operação.');
    }
    
}


botoes.forEach(botao => {
    botaoDaPagina = document.getElementById(botao);
    
    botaoDaPagina.addEventListener('click', function(event) {
        event.preventDefault();
        calcularEExibir(botao);
    })
});
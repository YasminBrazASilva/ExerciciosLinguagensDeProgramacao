/*Yasmin Braz de Abreu Silva RA: 236632*/

/* TESTE - A API ORIGINAL ESTÁ RETORNANDO TOO MANY REQUESTS
function simulacaoFetch(url) {
    if (url === `${urlBase}/cargo`) {
        var cargosData = [
            {"id" : 1, "nome" : "Analista de Sistemas", "salário" : "8500"},
            {"id" : 2, "nome" : "Assistente Administrativo", "salário" : "2500"},
            {"id" : 3, "nome" : "Secretário", "salário" : "4300"},
            {"id" : 4, "nome" : "Gerente de Vendas", "salário" : "6500"},
            {"id" : 5, "nome" : "Analista de Marketing", "salário" : "4500"}
        ];
        return Promise.resolve({ json: () => Promise.resolve(cargosData) });
    } else if (url === `${urlBase}/setor`) {
        var cargosData = [
            { id: 1, nome: "Tecnologia da Informação", sigla: "TI" },
            { id: 2, nome: "Recursos Humanos", sigla: "RH" },
            { id: 3, nome: "Financeiro", sigla: "FI" },
            { id: 4, nome: "Marketing e Vendas", sigla: "MK" },
            { id: 5, nome: "Produção e Operações", sigla: "PO" }
        ];
        return Promise.resolve({ json: () => Promise.resolve(cargosData) });
    } else if (url === `${urlBase}/convenio`) {
        var cargosData = [
            { id: 1, nome: "UNIMED", valor: { titular: 1500, dependente: 750 } },
            { id: 2, nome: "Intermédica", valor: { titular: 1400, dependente: 850 } }
        ];
        return Promise.resolve({ json: () => Promise.resolve(cargosData) });
    }
}
FIM TESTE*/

const urlBase = 'https://aulalp2024.free.beeceptor.com'
let dadosCargo;
let dadosSetor;
let dadosConvenio;

function popularCampos(dados, idElemento) {
    var select = document.getElementById(idElemento);

    dados.forEach(function (registro) {
        var option = document.createElement("option");
        option.text = registro.nome;
        option.value = registro.id;

        select.add(option);
    });
}

async function getAllData() {
    const promessaCargo = fetch(`${urlBase}/cargo`)
    const promessaSetor = fetch(`${urlBase}/setor`)
    const promessaConvenio = fetch(`${urlBase}/convenio`)

    /* TESTE - A API ORIGINAL ESTÁ RETORNANDO TOO MANY REQUESTS
    const promessaCargo = simulacaoFetch(`${urlBase}/cargo`)
    const promessaSetor = simulacaoFetch(`${urlBase}/setor`)
    const promessaConvenio = simulacaoFetch(`${urlBase}/convenio`)
    FIM TESTE*/

    const responses = await Promise.all([promessaCargo, promessaSetor, promessaConvenio]);
    const dados = await Promise.all(responses.map(response => response.json()));

    dadosCargo = dados[0];
    dadosSetor = dados[1];
    dadosConvenio = dados[2];

    popularCampos(dadosCargo, 'cargo_nome');
    popularCampos(dadosSetor, 'setor_nome');
    popularCampos(dadosConvenio, 'convenio_nome');
}

try {
    getAllData();
} catch (error) {
    console.error('Ocorreu um erro:', error);
}



document.getElementById('cargo_nome').addEventListener('change', function () {
    var selecionado = this.options[this.selectedIndex];
    var cargoSelecionadoId = parseInt(selecionado.value);
    document.getElementById('cargo_id').value = cargoSelecionadoId
    
    const cargoSelecionado = dadosCargo.find(cargo => cargo.id === cargoSelecionadoId);
    document.getElementById('cargo_salario').value = cargoSelecionado.salário;
});


document.getElementById('setor_nome').addEventListener('change', function () {
    var selecionado = this.options[this.selectedIndex];
    var setorSelecionadoId = parseInt(selecionado.value);
    document.getElementById('setor_id').value = setorSelecionadoId

    const setorSelecionado = dadosSetor.find(setor => setor.id === setorSelecionadoId);
    document.getElementById('setor_sigla').value = setorSelecionado.sigla;
});


document.getElementById('convenio_nome').addEventListener('change', function () {
    var selecionado = this.options[this.selectedIndex];
    var convenioSelecionadoId = parseInt(selecionado.value);
    document.getElementById('convenio_id').value = convenioSelecionadoId

    const convenioSelecionado = dadosConvenio.find(convenio => convenio.id === convenioSelecionadoId);
    document.getElementById('convenio_valor_titular').value = convenioSelecionado.valor.titular;
    document.getElementById('convenio_valor_dependente').value = convenioSelecionado.valor.dependente;
});
/*9. Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$
100,00 e altere o nome desse produto para "Produto Caro"*/
class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    informacoes() {
        return `ID: ${this.id} | NOME: ${this.nome} | PREÇO: R$${this.preco}` 
    }
}

var listaProdutos = [
    new Produto(1, "Caneca de Porcelana Personalizada", 15.99),
    new Produto(2, "Fones de Ouvido Bluetooth", 89.99),
    new Produto(3, "Kit de Pincéis de Maquiagem", 24.50),
    new Produto(4, "Almofada Decorativa", 18.75),
    new Produto(5, "Carregador Portátil para Celular", 29.99),
    new Produto(6, "Jogo de Tabuleiro", 34.95),
    new Produto(7, "Luminária de Mesa LED", 142.50),
    new Produto(8, "Bolsa Térmica para Alimentos", 19.99),
    new Produto(9, "Conjunto de Copos Coloridos (6 unidades)", 12.80),
    new Produto(10, "Kit de Ferramentas Domésticas", 155.75),
]

var primeiroProdutoAcima100 = listaProdutos.find((produto) => {
    return produto.preco > 100
})

console.log(`O primeiro produto com preço superior a R$100,00 é: ${primeiroProdutoAcima100.informacoes()}`);


primeiroProdutoAcima100.nome = "Produto Caro"
console.log(`Com a alteração, as informações deste produto passam a ser: ${primeiroProdutoAcima100.informacoes()}`);
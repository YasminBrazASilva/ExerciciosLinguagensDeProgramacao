/*8. Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos
Produto e mapeie esses produtos para um novo array com os preços aumentados em
10%.*/

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

console.log(`A lista de produtos é:`);
listaProdutos.forEach(produto => {
    console.log(produto.informacoes());
});


console.log("");
var listaProdutosAumentoDePreco = listaProdutos.map((produto) => {
    return new Produto(produto.id, produto.nome, (produto.preco * 1.10).toFixed(2))
})

console.log("Os produtos e seus reajustes seguem: ");
listaProdutosAumentoDePreco.forEach(produto => {
    console.log(produto.informacoes());
});
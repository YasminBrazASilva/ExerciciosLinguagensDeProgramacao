/*7. Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e
encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.*/

class Carro {
    constructor(id, marca, ano) {
        this.id = id;
        this.marca = marca;
        this.ano = ano;
    }

    informacoes() {
        return `ID: ${this.id} |  Marca: ${this.marca} | Ano: ${this.ano}`;
    }
    
}

var listaDeCarros = [
    new Carro(1, "Toyota", 2022),
    new Carro(2, "Ford", 2010),
    new Carro(3, "Honda", 2020),
    new Carro(4, "Chevrolet", 2019),
    new Carro(5, "Volkswagen", 1004),
    new Carro(6, "Tesla", 2000)
]

console.log(`A lista de carros é:`);
listaDeCarros.forEach(carro => {
    console.log(carro.informacoes());
});


console.log("");
var primeiroToyota = listaDeCarros.find((carro) => {
    return carro.marca == "Toyota"
})

console.log(`O primeiro Toyota é: ${primeiroToyota.informacoes()}`);


var listaCarrosMaisNovos = listaDeCarros.filter((carro) => {
    return carro.ano > 2010
})

console.log(`A lista de carros que foram fabricados após 2010 é:`);
listaCarrosMaisNovos.forEach(carro => {
    console.log(carro.informacoes());
});
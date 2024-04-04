/*6. Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro
e filtre os livros com mais de 300 páginas*/

class Livro {
    constructor (titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

var listaLivros = biblioteca = [
    new Livro("Dom Quixote", 863),
    new Livro("Cem Anos de Solidão", 417),
    new Livro("1984", 328),
    new Livro("O Pequeno Príncipe", 96),
    new Livro("O Senhor dos Anéis", 1221),
    new Livro("Harry Potter e a Pedra Filosofal", 223)
]

console.log(`A lista de livros é:`);
listaLivros.forEach(livro => {
    console.log(livro);
});

var listaLivrosMaisDe300Paginas = listaLivros
    .filter((livro) => {
        return livro.paginas > 300
    })
    .map((livro) => {
        return livro.titulo
    })

console.log(`Os livros com mais de 300 páginas são: [${listaLivrosMaisDe300Paginas}]`);
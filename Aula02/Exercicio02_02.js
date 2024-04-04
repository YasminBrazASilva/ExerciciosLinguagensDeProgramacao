/*2. Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.*/

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var listaUsuarios = [
    new Usuario("Ana", 12),
    new Usuario("Bianca", 26),
    new Usuario("Carol",  34),
    new Usuario("Daniela", 45),
    new Usuario("Elena", 56)
]

var listaMaioresDeIdade = listaUsuarios
        .filter((usuario) => {
            return usuario.idade >= 18
        })
        .map((usuario) => {
            return usuario.nome
        })

console.log(`Os usuários maiores de idade são: [${listaMaioresDeIdade}]`);
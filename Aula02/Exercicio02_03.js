/*3.Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.*/

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

var primeiroUsuarioEntre25e30 = listaUsuarios
        .find((usuario) => {
            return usuario.idade >= 25 && usuario.idade <= 30
        })
        .nome

console.log(`O primeiro usuário que possui idade entre 25 e 30 anos é: ${primeiroUsuarioEntre25e30}`);
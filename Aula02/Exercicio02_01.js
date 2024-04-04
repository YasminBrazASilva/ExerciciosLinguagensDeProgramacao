/*1. Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de
objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras
maiúsculas`)*/

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

console.log(`A lista de usuários é:`);
listaUsuarios.forEach(usuario => {
    console.log(usuario);
});

var listaNomeUsuariosMaiusculo = listaUsuarios.map((usuario) => {
    return usuario.nome.toUpperCase();
})

console.log(`A lista de nomes em maiúsculo é: [${listaNomeUsuariosMaiusculo}]`);
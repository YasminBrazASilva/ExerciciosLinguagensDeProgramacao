/*5. Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro
e Gato que herdam de Animal e implementam o método emitirSom de forma
diferente para cada classe.*/

class Animal {
    constructor (nome) {
        this.nome = nome
    }

    emitirSom () {
        console.log(`O ${this.nome} está fazendo um barulho genérico de animal`);
    }

    correr () {
        console.log(`O ${this.nome} está correndo`);
    }
}

class Cachorro extends Animal { 
    emitirSom() {
        console.log(`${this.nome} faz AU! AU!`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} faz MIAAAAAU`);
    }
}

var gatito = new Gato("Garfield");
var doguinho = new Cachorro("Snoopy");
var passarinho = new Animal("Piu Piu");
gatito.emitirSom();
doguinho.emitirSom();
passarinho.emitirSom();
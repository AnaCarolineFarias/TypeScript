/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Herança'
* Author: Ana Caroline <@_fariaasz@>
* Data: 19/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export {};

// -> Exemplo 01 

class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu: ${distancia} metros.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('Au, Au!');
    }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();

// -> Exemplo 02 

class Pessoa {
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}.`;
    }

    apresentarPessoa(): string {
        return `Meu nome é ${this.nome} ${this.sobrenome}. `;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
    }

    retornarNome_02(): string {
        return super.apresentarPessoa() + `E, sou ${this.funcao}`;
    }
}

const funcionario = new Funcionario('Ana', 'Caroline', 'Aprendiz de TI ');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());

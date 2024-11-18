/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Classes'
* Author: Ana Caroline <@_fariaasz@>
* Data: 18/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export {};

// -> Exemplo 01 - Classes

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Ana Caroline', 'Oliveira Farias');
console.log(pessoa.nomeCompleto());

// -> Exemplo 02 - Classes (sem constructor)

class Estudante {
    codigoEstudante: number | undefined;
    nomeEstudante: string | undefined;
}

// Criar um objeto ou a instancia

const estudante = new Estudante();

// Inicializar o objeto:
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Ana Caroline';

// Acessar os campos
console.log('Código do Estudante: ' + estudante.codigoEstudante);
console.log('Nome do Estudante: ' + estudante.nomeEstudante);

// -> Exemplo 03 - Classes (com constructor)

class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;
    idadeEstudante: number;
    cursoEstudante: string;

    // Defini o Construtor
    constructor(codigoEstudante: number, nomeEstudante: string, idadeEstudante: number, cursoEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idadeEstudante = idadeEstudante;
        this.cursoEstudante = cursoEstudante;
    }

    // Criar o método
    listarEstudante(): void {
        console.log('Código do Estudante: ' + this.codigoEstudante);
        console.log('Nome do Estudante: ' + this.nomeEstudante);
        console.log('Idade do Estudante: ' + this.idadeEstudante);
        console.log('Curso do Estudante: ' + this.cursoEstudante);
    }
}

// Acessar os campos:
const estudante_1 = new Estudante_1(9845, 'Ana Caroline', 18, 'Ciências da Computação');
console.log('Lendo o código do Estudante: ' + estudante_1.codigoEstudante);
console.log('Lendo o nome do Estudante: ' + estudante_1.nomeEstudante);
console.log('Lendo a idade do Estudante: ' + estudante_1.idadeEstudante);
console.log('Lendo o curso do Estudante: ' + estudante_1.cursoEstudante);

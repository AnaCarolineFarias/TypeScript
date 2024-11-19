/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Get & Set'
* Author: Ana Caroline <@_fariaasz@>
* Data: 19/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export {};

// -> Exemplo 01 - Get

class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// -> Exemplo 02 - Set

class Pessoa {
    nome: string | undefined;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Ana Caroline');
console.log('Meu nome é: ', pessoa.nome);

// -> Exemplo 03 - Get [Explicação mais densa]

class Estudante {
    private _nome = 'Ana Caroline';
    private _semestre: number | undefined;
    private _curso: string | undefined;

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

// -> Exemplo 04 - Set [Explicação mais densa]

class Estudante_01 { 
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }

    public get cursos() {
        return this.curso;
    }

    public set cursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const estudante_01 = new Estudante_01('Ana Caroline', 2, 'Análise e Desenvolvimento de Sistemas');
console.log(estudante_01);

// Setter call
estudante_01.curso = 'Ciências da Computação';

// Getter call
console.log('Curso atualizado...', estudante_01.cursos);

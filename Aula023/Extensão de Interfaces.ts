/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Extensão de Interfaces'
* Author: Ana Caroline <@_fariaasz@>
* Data: 25/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export{};

// -> Exemplo 01 - Interfaces com extends

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raca: string;
}

const cachorro: Cachorro = {
    nome: 'Banguela',
    idade: 2,
    porte: 'Médio',
    raca: 'Spitz Alemão',
};

console.log(cachorro);

// -> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro_01 {
    nome: string;
}

interface Gato {
    nome: string;
}

interface Animal_01 extends Cachorro_01, Gato {
    idade: number;
}

const animal: Animal_01 = {
    nome: 'Pitula',
    idade: 2,
};

console.log(animal);

// -> Exemplo 03 - Uso do Omit

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: 'js-123',
    nome: 'Ana Caroline',
    salario: '10k',
    linguagemProgramacao: 'TypeScript',
}

console.log(desenvolvedor);

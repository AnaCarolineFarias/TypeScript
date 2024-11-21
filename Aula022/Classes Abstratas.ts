/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Classes Abstratas'
* Author: Ana Caroline <@_fariaasz@>
* Data: 19/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export{};

// -> Exemplo 01 

abstract class Funcionario {

    constructor(
        private nome: string,
        private sobrenome: string,
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    abstract retornarSalario(): number;
    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario {

    constructor(
        nome: string, 
        sobrenome: string, 
        private salario: number
    ) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {

    constructor(
        nome: string, 
        sobrenome: string, 
        private valorHora: number,
        private horasTrabalhadas: number
    ) { super(nome, sobrenome);

    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const ana = new FuncionarioCLT('Ana Caroline', 'Oliveira Farias', 6150);
const marta = new FuncionarioPJ('Marta Santana', 'De Oliveira', 150, 160);

console.log(ana.emitirContraCheque());
console.log(marta.emitirContraCheque());

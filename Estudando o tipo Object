/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Tipo Object'
* Author: Ana Caroline <@_fariaasz@>
* Data: 11/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

// -> Exemplo 01 - Exemplo básico do uso do Type Object

const PessoaAna = {
    nome: 'Ana',
    sobrenome: 'Caroline',
    idade: 18,
    funcao: 'Aprendiz de TI'
};

console.log(PessoaAna);

// -> Exemplo 02 - Object como parâmetros de função (Eles podem ser anônimos)

function onboarding01(funcionario: { nome: string}) {
    return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Ana Caroline'}));

// -> Exemplo 03 - Object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(Pessoa: Pessoa) {
    return (
        'Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.'
    )
}

console.log(onboarding02({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI'}));

// -> Exemplo 04 - Object como type alias

type Pessoa04 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(Pessoa: Pessoa04) {
    return (
        'Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem
    )
}

console.log(onboarding03({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI', linguagem: 'JavaScript/Typescript'}));

// -> Exemplo 05 - Usando optional no object

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}

function onboarding04(Pessoa: Pessoa05) {
    return (
        'Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem
    )
}

console.log(onboarding04({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI', linguagem: 'JavaScript/Typescript'}));

// -> Exemplo 06 - Propriedade 'ReadOnly' (Se deseja proibir que os devs não modifiquem determinado objeto use o 'ReadOnly')

interface Pessoa06 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
}

function onboarding05(Pessoa: Pessoa06) {
    return (
        'Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        Pessoa.email
    )
}

console.log(onboarding05(
    { nome: 'Ana Caroline', 
      funcao: 'Aprendiz de TI', 
      linguagem: 'JavaScript/Typescript',
      email: 'ana.farias@tec.com'

    }

));

// -> Exemplo 07 - Tipos de extensões (Heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Ana Caroline',
    sobrenome: 'Oliveira Farias',
    idade: 18
}

console.log(filha);

// -> Exemplo 08 - Tipos de interseções

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato;

// -> Exemplo 09 - Generic objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Ana Caroline',
    email: 'aninha@gmail.com'
}

const admin: Admin = {
    nome: 'Ana Caroline',
    email: 'aninha@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T{
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

/*function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log(acessarSistema(usuario));*/

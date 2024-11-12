"use strict";
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
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Ana Caroline' }));
function onboarding02(Pessoa) {
    return ('Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI' }));
function onboarding03(Pessoa) {
    return ('Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem);
}
console.log(onboarding03({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI', linguagem: 'JavaScript/Typescript' }));
function onboarding04(Pessoa) {
    return ('Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem);
}
console.log(onboarding04({ nome: 'Ana Caroline', funcao: 'Aprendiz de TI', linguagem: 'JavaScript/Typescript' }));
function onboarding05(Pessoa) {
    return ('Seja bem-vinda ' +
        Pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        Pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        Pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        Pessoa.email);
}
console.log(onboarding05({ nome: 'Ana Caroline',
    funcao: 'Aprendiz de TI',
    linguagem: 'JavaScript/Typescript',
    email: 'ana.farias@tec.com'
}));
const filha = {
    nome: 'Ana Caroline',
    sobrenome: 'Oliveira Farias',
    idade: 18
};
console.log(filha);
const usuario = {
    nome: 'Ana Caroline',
    email: 'aninha@gmail.com'
};
const admin = {
    nome: 'Ana Caroline',
    email: 'aninha@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
/*function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log(acessarSistema(usuario));*/ 

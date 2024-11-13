"use strict";
/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Funções'
* Author: Ana Caroline <@_fariaasz@>
* Data: 13/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 01 - Functions (Named function)
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const resultado = somarNumeros(2, 2);
console.log(resultado);
// -> Exemplo 02 - Função Anônima (Function Expression)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá, Developers!'));
// -> Exemplo 03 - (Arrow Function Expression)
const saudar_03 = (mensagem) => {
    return mensagem;
};
console.log(saudar_03('Olá, Developers!'));
// -> Exemplo 04 - (Function Constructor)
const saudar_04 = new Function('mensagem', 'return "Fala" + mensagem');
console.log(saudar_04(' galera!'));

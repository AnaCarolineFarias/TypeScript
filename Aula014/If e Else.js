"use strict";
/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'If e Else'
* Author: Ana Caroline <@_fariaasz@>
* Data: 12/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/
Object.defineProperty(exports, "__esModule", { value: true });
// -> Exemplo 01 - Uso do If
const numeroMax = 100;
let contador = 100;
if (contador < numeroMax) {
    contador++;
}
console.log(contador);
// -> Exemplo 02 - Uso do If
const permissaoIdadeDirigir = 18;
if (permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir!');
}
console.log(permissaoIdadeDirigir);
// -> Exemplo 03 - Uso do If-Else
const permissaoIdadeDirigir01 = 18;
if (permissaoIdadeDirigir01 <= 18) {
    console.log('Você está habilitado para dirigir!');
}
else {
    console.log('Você não está habilitado para dirigir!');
}
// -> Exemplo 04 - If... Else If (Cálculo IMC - https://www.programasaudefacil.com.br/calculadora-de-imc)
let desconto;
let valorCompra = 14;
if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
}
else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log(`Você teve um desconto de...: ${desconto}% desconto`);
// -> Exemplo 05 - Ternário (? :) - If...Else
const idadeVotacao = 18;
if (idadeVotacao >= 18) {
    console.log('Você é elegível para votar.');
}
else {
    console.log('Você não está elegível para votar.');
}
// -> Ternário
const idadeVotacao01 = 18;
const podeVotar = (idadeVotacao01 >= 18) ? 'Você é elegível para votar.' : 'Você não está elegível para votar.';
console.log(podeVotar);

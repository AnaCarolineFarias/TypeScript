/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Switch Case'
* Author: Ana Caroline <@_fariaasz@>
* Data: 13/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export { };

// -> Exemplo 01 - Uso do switch-case

let flor: string = 'tulipa';

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas');
        break;
    case 'violeta':
        console.log('Violeta são azuis');
    break;
    case 'tulipa':
        console.log('Tulipa são brancas');
    break;
    default:
        console.log('Por favor, selecione uma outra flor!');
        break;
}

// -> Exemplo 02 - Uso do switch-case

let diaUtilSemana = 5;

switch (diaUtilSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
    break;
    case 2:
        console.log('Terça');
    break;
    case 3:
        console.log('Quarta');
    break;
    case 4:
        console.log('Quinta');
    break;
    case 5:
        console.log('Sexta');
    break;
    default:
        console.log('Não é um dia útil!');
        break;
}

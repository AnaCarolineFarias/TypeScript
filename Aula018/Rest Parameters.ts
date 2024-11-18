/*
* Arquivo: index.ts
* Descrição: Arquivo responsável por praticar conceitos básicos sobre 'Rest Parameters'
* Author: Ana Caroline <@_fariaasz@>
* Data: 18/11/2024
* Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

export {};

// -> Exemplo 01 

function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numeros) => (total += numeros));

    return total;
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(70, 30, 50, 30, 20));

// -> Exemplo 02 

function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ');
}

console.log(
    listarFrutas('Ana, você precisa ir na feira e comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍'
   ), 
);

// -> Exemplo 03 

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log(
    'Todos os produtos do departamento de Informática disponíveis no estoque...: ', 
);

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'USB',
    'Monitor',
    'Teclado',
    'WebCam',
    'Gabinete',
    'Memória RAM',
    'Processador',
    'Placa de vídeo',
    'Placa mãe',
    'Coolers'
);

/*
* Data: 23/10/2024
* Author: Ana Caroline <@_fariaasz@>
* Transpilação do arquivo: <windows> CTRL + SHIFT + B -> tsc: build/watch
*/

// -> Variáveis [Type Annotations]
let nome: string = 'Ana Caroline';
console.log(nome);

// -> Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

// -> Objetos [Type Annotations]
let carro: {
    nome: string
    ano: number
    preco: number
};

carro = { nome: 'Nissan Silvia S15', ano: 1999, preco: 200000}
console.log(carro);

// -> Functions [Type Annotations]
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumero(2, 5));



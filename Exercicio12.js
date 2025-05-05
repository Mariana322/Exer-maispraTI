// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const prompt = require('prompt-sync')(); // Importa a biblioteca de prompt

let numero = Number(prompt("Digite um número para ver a tabuada: ")); // Lê um número

console.log(`Tabuada do ${numero}:`); // Início da exibição da tabuada

// Loop para multiplicar o número de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`); // Exibe o resultado da multiplicação
}


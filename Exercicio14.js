// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')(); // Importa o prompt

let numero = Number(prompt("Digite um número para calcular o fatorial: ")); // Lê o número
let fatorial = 1; // Variável para armazenar o resultado do fatorial

// Loop que multiplica de 1 até o número informado
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`); // Exibe o resultado

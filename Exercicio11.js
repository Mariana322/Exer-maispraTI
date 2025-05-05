// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')(); // Importa a biblioteca para entrada de dados

let soma = 0; // Variável para acumular a soma dos números

// Loop que se repete 5 vezes
for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `)); // Lê um número do usuário
    soma += numero; // Soma o número à variável acumuladora
}

console.log(`A soma total dos números é: ${soma}`); // Exibe a soma total

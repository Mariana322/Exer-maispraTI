// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo console
const prompt = require('prompt-sync')(); 

// Solicita ao usuário que digite um número e converte a entrada para o tipo Number
let numero = Number(prompt("Digite um número: "));

// Verifica se o número é divisível por 2 (ou seja, se é par)
if (numero % 2 === 0) {
    // Se o número for par, exibe a mensagem correspondente
    console.log("O número é par.");
} else {
    // Caso contrário (ímpar), exibe outra mensagem
    console.log("O número é ímpar.");
}


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

// Solicita o peso e altura
let peso = Number(prompt("Digite seu peso (kg): "));
let altura = Number(prompt("Digite sua altura (m): "));

// Calcula o IMC
let imc = peso / (altura * altura);

// Classifica o IMC
console.log("Seu IMC é:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc < 24.9) {
    console.log("Categoria: Peso normal");
} else if (imc < 29.9) {
    console.log("Categoria: Sobrepeso");
} else {
    console.log("Categoria: Obesidade");
}

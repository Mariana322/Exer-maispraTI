// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

// Solicita a idade
let idade = Number(prompt("Digite sua idade: "));

// Classifica a idade em categorias
if (idade >= 0 && idade <= 12) {
    console.log("Categoria: Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Categoria: Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Categoria: Adulto");
} else {
    console.log("Categoria: Idoso");
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')(); // Importa o prompt

let soma = 0;        // Soma acumulada dos números digitados
let contador = 0;    // Conta quantos números foram digitados
let numero;          // Armazena o número digitado pelo usuário

// Loop até o usuário digitar 0
do {
    numero = Number(prompt("Digite um número decimal (0 para encerrar): "));
    
    // Se o número for diferente de 0, acumula na soma e incrementa o contador
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

// Calcula e exibe a média, se pelo menos um número foi digitado
if (contador > 0) {
    let media = soma / contador;
    console.log(`A média dos números é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}

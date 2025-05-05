// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0; // Primeiro número da sequência
let b = 1; // Segundo número da sequência

console.log("Os 10 primeiros números da sequência de Fibonacci:");
console.log(a); // Exibe 0
console.log(b); // Exibe 1

// Gera os próximos 8 números (totalizando 10)
for (let i = 3; i <= 10; i++) {
    let proximo = a + b; // Soma os dois anteriores
    console.log(proximo); // Exibe o próximo número
    a = b;      // Atualiza a variável a para o valor anterior de b
    b = proximo; // Atualiza b para o novo valor gerado
}


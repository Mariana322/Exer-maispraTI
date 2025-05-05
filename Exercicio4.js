// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

// Exibe o menu
console.log("Escolha uma opção:");
console.log("1 - Dizer Olá");
console.log("2 - Calcular o dobro de um número");
console.log("3 - Sair");

let opcao = prompt("Digite o número da opção: ");

switch(opcao) {
    case '1':
        console.log("Olá, usuário!");
        break;
    case '2':
        let numero = Number(prompt("Digite um número: "));
        console.log("O dobro é:", numero * 2);
        break;
    case '3':
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida.");
}

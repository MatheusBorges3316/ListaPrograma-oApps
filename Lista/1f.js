const prompt = require("prompt-sync")();

let conta = parseFloat(prompt("Digite o valor da conta: "));
let clientes = parseInt(prompt("Digite a quantidade de pessoas: "));

let valorPorPessoa = conta / clientes;
console.log("Cada pessoa deve pagar: R$ ",valorPorPessoa)

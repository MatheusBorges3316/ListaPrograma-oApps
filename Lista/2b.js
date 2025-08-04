const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um número:"));

if (n % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}
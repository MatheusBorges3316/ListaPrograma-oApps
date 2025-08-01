const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite a nota 1:"));
let n2 = parseFloat(prompt("Digite a nota 2:"));
let n3 = parseFloat(prompt("Digite a nota 3:"));

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
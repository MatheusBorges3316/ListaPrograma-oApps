const prompt = require("prompt-sync")();

let n1 = Number (prompt("Digite um numero: "));
let n2 = Number (prompt("Digite outro numero: "));

console.log("\nSoma:",n1 + n2, "\nSubtração:",n1 - n2, "\nMultiplicação:",n1 * n2, "\nDivisão:",n1 / n2, "\nResto da divisão: ",n1 % n2);
const prompt = require("prompt-sync")();

let nome = prompt("Nome: ");
let idade = prompt("Idade: ");
let altura= prompt("Altura(m): ");

console.log("\nMeu nome é",nome,"tenho",idade, "anos e",altura,"m de altura");
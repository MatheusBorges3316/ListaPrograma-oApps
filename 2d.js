const prompt = require("prompt-sync")();

let idadeAlistamento = parseInt(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo (M ou F): ");

if (sexo === "M" && idadeAlistamento >= 18) {
  console.log("Alistamento militar obrigatório");
} else {
  console.log("Alistamento militar não obrigatório");
}
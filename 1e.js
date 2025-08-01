const prompt = require("prompt-sync")();

let distancia = parseFloat(prompt("Digite a distância da viagem (km): "));
let consumo = parseFloat(prompt("Digite o consumo médio do carro (km/l): "));
let precoGasolina = parseFloat(prompt("Digite o preço da gasolina (R$): "));

let qtdLitro = distancia / consumo;
let custo = qtdLitro * precoGasolina;

console.log("\nQuantidade de litros: ", qtdLitro);
console.log("Custo da viagem: R$",custo);

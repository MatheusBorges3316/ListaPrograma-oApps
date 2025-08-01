const prompt = require("prompt-sync")();

let n1 = Number (prompt("Digite um numero: "));
if(n1 % 3 === 0){
    console.log("\nÉ multiplo de 3")
}
else{
    console.log("\nNão é multiplo de 3")
}
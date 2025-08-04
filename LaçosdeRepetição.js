let frutas = ["banana","morango","uva","maça","melancia","abacate"];

for(let contador = 0; contador <= 5; contador++){
    console.log(contador);
    console.log(frutas[contador]);
    console.log(`A fruta ${frutas[contador]} esta na posição ${contador}`)
}

for(let i = 10;i >= 0;i--){
    if(i == 10){
        console.log("Iniciando contagem regressiva...")
    }
    console.log(i);
    if(i==0){
        console.log("boooom")    
    }
} 
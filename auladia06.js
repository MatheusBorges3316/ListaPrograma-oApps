// const prompt = require("prompt-sync")()

// let matriz = [
//    [2,4,6],
//    [8,10,12],
//    [14,16,18]

// ]
// console.log(`valor da linha 0 coluna 1: ${matriz[0][1]}`)

let alunos = [
       ["Guilerme",9],
       ["Matheus",10],
       ["João",7]
    ]
    for(let i = 0; i < alunos.length; i++){
        console.log(`${alunos[i]}`)
        console.log(`${alunos[i][0]} tirou ${alunos[i][1]}`)
    }
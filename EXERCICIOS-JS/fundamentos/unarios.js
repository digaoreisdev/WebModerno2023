let num1 = 1
let num2 = 2

num1++ //Forma pós-fixada (Com prioridade menor)
console.log(num1) //Resultado 2
--num1 //Forma pré-fixada (Com prioridade maior)
console.log(num1) //Resultado 1

console.log(++num1 === num2--) //Resultado true
console.log(num1 === num2) //Resultado false
//Percorrendo um Array - O que retornar é o índice.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
  console.log(i, notas[i])
}

//Percorrendo um Objeto - O que retornar é o índice.
const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: '29',
  peso: '64',
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${(pessoa[atributo])}`)
}

const cores = ['vermelho', 'verde', 'azul'];
for (const cor of cores) {
  console.log(cor); // Imprime os valores: vermelho, verde, azul
}

const pessoas = [
  { nome: 'Alice', idade: 30 },
  { nome: 'Bob', idade: 25 }
];

for (const { nome, idade } of pessoas) {
  console.log(`${nome} tem ${idade} anos.`);
}